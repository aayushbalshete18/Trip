import { ACTIVITIES } from '../data/activities';
import { DESTINATIONS } from '../data/destinations';
import { weatherService } from '../services/weatherService';
import { recommendationService } from '../services/recommendationService';
import { budgetOptimizer } from './budgetOptimizer';
import {
  Activity,
  DayItinerary,
  InterestCategory,
  TravelerType,
  TravelPace,
  TravelStyle,
  TripPlan
} from '../types/trip';

export interface GenerateTripParams {
  destination: string;
  budget: number;
  startDate: string;
  endDate: string;
  durationDays?: number;
  travelerType: TravelerType;
  interests: InterestCategory[];
  travelStyle: TravelStyle;
  travelPace: TravelPace;
}

export function generateTripPlan(params: GenerateTripParams): TripPlan {
  const {
    destination,
    budget,
    startDate,
    endDate,
    travelerType,
    interests,
    travelStyle,
    travelPace
  } = params;

  // Calculate duration if not explicitly provided
  let duration = params.durationDays;
  if (!duration || duration <= 0) {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      duration = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1);
    } else {
      duration = 3;
    }
  }

  // Find destination info
  const destLower = destination.toLowerCase().trim();
  const destinationDetails = DESTINATIONS.find(
    (d) => d.id === destLower || d.name.toLowerCase().includes(destLower) || destLower.includes(d.name.toLowerCase())
  ) || DESTINATIONS[0];

  // Fetch weather forecast
  const weatherForecasts = weatherService.getMultiDayForecast(destinationDetails.name, duration);

  // Filter and score activities for this destination
  let destActivities = ACTIVITIES.filter(
    (a) => a.destinationId === destinationDetails.id || a.destinationId === 'goa'
  );

  // If few activities, borrow from other destinations as fallback with localized context
  if (destActivities.length < duration * 3) {
    const fallbacks = ACTIVITIES.filter((a) => a.destinationId !== destinationDetails.id);
    destActivities = [...destActivities, ...fallbacks];
  }

  const maxDailyActivityBudget = (budget * 0.25) / duration;

  // Score all available activities
  const scoredActivities = destActivities.map((act) => {
    const weather = weatherForecasts[0]?.condition || 'Sunny';
    const scoreData = recommendationService.calculateActivityScore(
      act,
      interests,
      maxDailyActivityBudget,
      travelerType,
      travelStyle,
      weather
    );
    return {
      activity: act,
      score: scoreData.totalScore
    };
  });

  // Sort by highest score
  scoredActivities.sort((a, b) => b.score - a.score);

  // Group by slots: Morning, Afternoon, Evening
  const morningPool = scoredActivities
    .filter((sa) => sa.activity.timeSlot === 'Morning')
    .map((sa) => sa.activity);
  const afternoonPool = scoredActivities
    .filter((sa) => sa.activity.timeSlot === 'Afternoon')
    .map((sa) => sa.activity);
  const eveningPool = scoredActivities
    .filter((sa) => sa.activity.timeSlot === 'Evening')
    .map((sa) => sa.activity);

  // Determine activities per day based on pace
  // Relaxed: 2 per day, Balanced: 3 per day, Packed: 3-4 per day
  const days: DayItinerary[] = [];
  const usedActivityIds = new Set<string>();

  for (let dayIndex = 1; dayIndex <= duration; dayIndex++) {
    const dayWeather = weatherForecasts[dayIndex - 1] || weatherForecasts[0];
    const dayActivities: Activity[] = [];

    // 1. Morning slot
    const morningAct =
      morningPool.find((a) => !usedActivityIds.has(a.id)) ||
      morningPool[(dayIndex - 1) % morningPool.length];
    if (morningAct) {
      dayActivities.push(morningAct);
      usedActivityIds.add(morningAct.id);
    }

    // 2. Afternoon slot (skip if relaxed pace on alternating days)
    if (travelPace !== 'relaxed' || dayIndex % 2 === 1) {
      const afternoonAct =
        afternoonPool.find((a) => !usedActivityIds.has(a.id)) ||
        afternoonPool[(dayIndex - 1) % afternoonPool.length];
      if (afternoonAct) {
        dayActivities.push(afternoonAct);
        usedActivityIds.add(afternoonAct.id);
      }
    }

    // 3. Evening slot
    const eveningAct =
      eveningPool.find((a) => !usedActivityIds.has(a.id)) ||
      eveningPool[(dayIndex - 1) % eveningPool.length];
    if (eveningAct) {
      dayActivities.push(eveningAct);
      usedActivityIds.add(eveningAct.id);
    }

    // Calculate daily total cost
    const dailyCost = dayActivities.reduce((acc, a) => acc + a.costInr, 0);

    // Formulate date string
    const currentDate = new Date(startDate || Date.now());
    currentDate.setDate(currentDate.getDate() + (dayIndex - 1));
    const formattedDate = currentDate.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });

    days.push({
      dayNumber: dayIndex,
      date: formattedDate,
      title: getDayTitle(dayIndex, dayActivities),
      weather: {
        condition: dayWeather.condition,
        tempC: dayWeather.tempC,
        icon: dayWeather.icon,
        note: dayWeather.recommendationNote
      },
      activities: dayActivities,
      dailyCost
    });
  }

  // Budget allocations
  const alloc = budgetOptimizer.calculateAllocation(budget, travelStyle);

  // Construct structured trip plan
  const tripPlan: TripPlan = {
    id: `trip-${Date.now()}`,
    destination: destinationDetails.name,
    destinationDetails,
    startDate: startDate || new Date().toISOString().split('T')[0],
    endDate: endDate || new Date(Date.now() + duration * 86400000).toISOString().split('T')[0],
    durationDays: duration,
    totalBudget: budget,
    travelerType,
    interests,
    travelStyle,
    travelPace,
    summary: `Your trip to ${destinationDetails.name} is optimized for ${interests.join(', ') || 'Adventure'}, affordability and local cultural experiences.`,
    days,
    budgetAllocation: {
      accommodation: alloc.accommodation,
      food: alloc.food,
      activities: alloc.activities,
      transport: Math.round(budget * 0.1),
      emergency: Math.round(budget * 0.05)
    },
    priceSpike: {
      item: `${destinationDetails.name} Heritage Portuguese Villa`,
      originalPrice: 2000,
      currentPrice: 2800,
      spikeAmount: 800,
      suggestedAlternative: {
        name: 'Palm Grove Eco Cottages',
        price: 2100,
        rating: 4.7,
        distance: '600m from beach'
      }
    },
    createdAt: new Date().toISOString(),
    status: 'Upcoming'
  };

  return tripPlan;
}

function getDayTitle(dayIndex: number, activities: Activity[]): string {
  if (activities.length === 0) return `Day ${dayIndex}: Exploration & Leisure`;
  const primaryCategory = activities[0].category;
  if (primaryCategory === 'Adventure') return `Day ${dayIndex}: High Thrill & Coastal Escapades`;
  if (primaryCategory === 'History' || primaryCategory === 'Culture') return `Day ${dayIndex}: Heritage Wonders & Local Flavors`;
  if (primaryCategory === 'Nature') return `Day ${dayIndex}: Serene Nature Trails & Backwaters`;
  return `Day ${dayIndex}: ${activities[0].name.split('&')[0].trim()} Experience`;
}
