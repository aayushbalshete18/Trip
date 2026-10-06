import { Activity, InterestCategory, TravelerType, TravelStyle } from '../types/trip';

export interface ScoreWeights {
  interestMatch: number; // 0 to 1
  budgetMatch: number; // 0 to 1
  rating: number; // normalized 0 to 1
  weatherSuitability: number; // 0 or 1
  travelerMatch: number; // 0 to 1
}

export const recommendationService = {
  /**
   * Calculates intelligent activity recommendation score based on:
   * score = interestMatch * 0.4 + budgetMatch * 0.25 + rating * 0.2 + weatherSuitability * 0.15
   */
  calculateActivityScore: (
    activity: Activity,
    userInterests: InterestCategory[],
    maxDailyActivityBudget: number,
    travelerType: TravelerType,
    travelStyle: TravelStyle,
    currentWeatherCondition: 'Sunny' | 'Rainy' | 'Cloudy' | 'Pleasant'
  ): { totalScore: number; weights: ScoreWeights } => {
    // 1. Interest match (0 to 1)
    const isExactInterest = userInterests.includes(activity.category);
    const hasTagMatch = activity.tags.some((tag) =>
      userInterests.some((interest) => tag.toLowerCase().includes(interest.toLowerCase()))
    );
    const interestMatch = isExactInterest ? 1.0 : hasTagMatch ? 0.75 : 0.2;

    // 2. Budget match (0 to 1)
    let budgetMatch = 0.5;
    if (activity.costInr === 0) {
      budgetMatch = travelStyle === 'budget' ? 1.0 : 0.8;
    } else if (activity.costInr <= maxDailyActivityBudget * 0.4) {
      budgetMatch = 1.0;
    } else if (activity.costInr <= maxDailyActivityBudget * 0.8) {
      budgetMatch = 0.75;
    } else if (activity.costInr <= maxDailyActivityBudget * 1.2) {
      budgetMatch = 0.45;
    } else {
      budgetMatch = 0.2;
    }

    // 3. Normalized Rating (0 to 1) -> 4.0 is 0.8, 5.0 is 1.0
    const normalizedRating = Math.min(1.0, Math.max(0, activity.rating / 5.0));

    // 4. Weather Suitability (0 to 1)
    const weatherSuitability = activity.suitableWeather.includes(currentConditionFallback(currentWeatherCondition)) ? 1.0 : 0.3;

    // 5. Traveler match
    const travelerMatch = activity.suitableTravelers.includes(travelerType) ? 1.0 : 0.6;

    // Composite Formula
    const totalScore =
      interestMatch * 0.4 +
      budgetMatch * 0.25 +
      normalizedRating * 0.2 +
      weatherSuitability * 0.15 +
      travelerMatch * 0.05; // slight booster

    return {
      totalScore: Number(totalScore.toFixed(3)),
      weights: {
        interestMatch,
        budgetMatch,
        rating: normalizedRating,
        weatherSuitability,
        travelerMatch
      }
    };
  }
};

function currentConditionFallback(condition: string): 'Sunny' | 'Rainy' | 'Cloudy' | 'Pleasant' {
  if (condition === 'Rainy') return 'Rainy';
  if (condition === 'Cloudy') return 'Cloudy';
  if (condition === 'Pleasant') return 'Pleasant';
  return 'Sunny';
}
