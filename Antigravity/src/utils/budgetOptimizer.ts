import { ExpenseItem, TravelStyle } from '../types/trip';

export interface BudgetBreakdown {
  totalBudget: number;
  totalSpent: number;
  remainingBudget: number;
  allocation: {
    accommodation: { allocated: number; spent: number; percent: number };
    food: { allocated: number; spent: number; percent: number };
    activities: { allocated: number; spent: number; percent: number };
    transport: { allocated: number; spent: number; percent: number };
    other: { allocated: number; spent: number; percent: number };
  };
  isOverBudget: boolean;
  statusMessage: string;
}

export const budgetOptimizer = {
  /**
   * Calculates smart allocation according to travel style:
   * Default: Accommodation 40%, Food 35%, Activities 25%
   */
  calculateAllocation: (totalBudget: number, travelStyle: TravelStyle = 'balanced') => {
    let accRatio = 0.4;
    let foodRatio = 0.35;
    let actRatio = 0.25;

    if (travelStyle === 'budget') {
      accRatio = 0.3;
      foodRatio = 0.4;
      actRatio = 0.3;
    } else if (travelStyle === 'luxury') {
      accRatio = 0.5;
      foodRatio = 0.3;
      actRatio = 0.2;
    }

    return {
      accommodation: Math.round(totalBudget * accRatio),
      food: Math.round(totalBudget * foodRatio),
      activities: Math.round(totalBudget * actRatio),
      transport: 0,
      emergency: 0
    };
  },

  /**
   * Evaluates current expenses against allocated budget
   */
  calculateBreakdown: (
    totalBudget: number,
    expenses: ExpenseItem[],
    travelStyle: TravelStyle = 'balanced'
  ): BudgetBreakdown => {
    const alloc = budgetOptimizer.calculateAllocation(totalBudget, travelStyle);

    let spentAcc = 0;
    let spentFood = 0;
    let spentAct = 0;
    let spentTrans = 0;
    let spentOther = 0;

    expenses.forEach((item) => {
      switch (item.category) {
        case 'Accommodation':
          spentAcc += item.amount;
          break;
        case 'Food':
          spentFood += item.amount;
          break;
        case 'Activities':
          spentAct += item.amount;
          break;
        case 'Transport':
          spentTrans += item.amount;
          break;
        default:
          spentOther += item.amount;
          break;
      }
    });

    const totalSpent = spentAcc + spentFood + spentAct + spentTrans + spentOther;
    const remainingBudget = totalBudget - totalSpent;
    const isOverBudget = remainingBudget < 0;

    let statusMessage = 'Budget is healthy and well-optimized.';
    if (isOverBudget) {
      statusMessage = `Over budget by ₹${Math.abs(remainingBudget).toLocaleString('en-IN')}. Consider switching to budget alternatives.`;
    } else if (remainingBudget < totalBudget * 0.15) {
      statusMessage = 'Low budget warning: Less than 15% funds remaining.';
    } else if (spentAcc > alloc.accommodation) {
      statusMessage = 'Accommodation spending is above standard 40% allocation limit.';
    }

    return {
      totalBudget,
      totalSpent,
      remainingBudget,
      allocation: {
        accommodation: {
          allocated: alloc.accommodation,
          spent: spentAcc,
          percent: Math.min(100, Math.round((spentAcc / (alloc.accommodation || 1)) * 100))
        },
        food: {
          allocated: alloc.food,
          spent: spentFood,
          percent: Math.min(100, Math.round((spentFood / (alloc.food || 1)) * 100))
        },
        activities: {
          allocated: alloc.activities,
          spent: spentAct,
          percent: Math.min(100, Math.round((spentAct / (alloc.activities || 1)) * 100))
        },
        transport: {
          allocated: Math.round(totalBudget * 0.1),
          spent: spentTrans,
          percent: Math.min(100, Math.round((spentTrans / (totalBudget * 0.1 || 1)) * 100))
        },
        other: {
          allocated: Math.round(totalBudget * 0.05),
          spent: spentOther,
          percent: Math.min(100, Math.round((spentOther / (totalBudget * 0.05 || 1)) * 100))
        }
      },
      isOverBudget,
      statusMessage
    };
  }
};
