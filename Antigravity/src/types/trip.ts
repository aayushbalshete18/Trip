export type TravelerType = 'student' | 'couple' | 'family' | 'solo' | 'friends';

export type TravelStyle = 'budget' | 'balanced' | 'comfort' | 'luxury';

export type TravelPace = 'relaxed' | 'balanced' | 'packed';

export type InterestCategory =
  | 'Adventure'
  | 'Nature'
  | 'Food'
  | 'History'
  | 'Culture'
  | 'Shopping'
  | 'Nightlife'
  | 'Photography'
  | 'Relaxation'
  | 'Hidden Gems';

export interface Destination {
  id: string;
  name: string;
  state: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  popularFor: string[];
  averageDailyCost: {
    budget: number;
    balanced: number;
    luxury: number;
  };
  bestTimeToVisit: string;
  rating: number;
  reviewCount: number;
  coordinates: { lat: number; lng: number };
}

export interface Activity {
  id: string;
  destinationId: string;
  name: string;
  category: InterestCategory;
  description: string;
  timeSlot: 'Morning' | 'Afternoon' | 'Evening';
  durationHours: number;
  costInr: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  suitableWeather: ('Sunny' | 'Rainy' | 'Cloudy' | 'Pleasant')[];
  suitableTravelers: TravelerType[];
  tags: string[];
  locationName: string;
  tips: string;
}

export interface DayItinerary {
  dayNumber: number;
  date: string;
  title: string;
  weather: {
    condition: 'Sunny' | 'Rainy' | 'Cloudy' | 'Pleasant';
    tempC: number;
    icon: string;
    note: string;
  };
  activities: Activity[];
  dailyCost: number;
}

export interface TripPlan {
  id: string;
  destination: string;
  destinationDetails?: Destination;
  startDate: string;
  endDate: string;
  durationDays: number;
  totalBudget: number;
  travelerType: TravelerType;
  interests: InterestCategory[];
  travelStyle: TravelStyle;
  travelPace: TravelPace;
  summary: string;
  days: DayItinerary[];
  budgetAllocation: {
    accommodation: number;
    food: number;
    activities: number;
    transport: number;
    emergency: number;
  };
  priceSpike?: {
    item: string;
    originalPrice: number;
    currentPrice: number;
    spikeAmount: number;
    suggestedAlternative: {
      name: string;
      price: number;
      rating: number;
      distance: string;
    };
  };
  createdAt: string;
  status: 'Upcoming' | 'Planned' | 'Draft' | 'Completed';
}

export interface ExpenseItem {
  id: string;
  category: 'Accommodation' | 'Food' | 'Activities' | 'Transport' | 'Shopping' | 'Other';
  title: string;
  amount: number;
  date: string;
}

export interface CommunityReview {
  id: string;
  destination: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  rating: number;
  reviewText: string;
  date: string;
  category: 'Hidden Gems' | 'Restaurants' | 'Activities' | 'Safety' | 'Accommodation';
  tags: string[];
  likesCount: number;
  hasLiked?: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  password?: string;
  avatar: string;
  homeCity: string;
  favoriteDestinations: string[];
  preferredBudget: number;
  preferredStyle: TravelStyle;
  preferredPace: TravelPace;
  preferredInterests: InterestCategory[];
  aiPersonalizationEnabled: boolean;
  totalTripsCount: number;
  totalBudgetSaved: number;
  isRegistered?: boolean;
}
