export interface LocalEvent {
  id: string;
  destination: string;
  title: string;
  category: 'Festival' | 'Music' | 'Food' | 'Art' | 'Heritage';
  dateRange: string;
  venue: string;
  description: string;
  freeEntry: boolean;
  estimatedCostInr: number;
}

export const LOCAL_EVENTS: LocalEvent[] = [
  {
    id: 'evt-goa-saturday-night-market',
    destination: 'Goa',
    title: 'Arpora Saturday Night Live Music Bazaar',
    category: 'Music',
    dateRange: 'Every Saturday Evening',
    venue: 'Arpora Hill, North Goa',
    description: 'An eclectic open-air bazaar with live international bands, artisan craft stalls, fire dancers, and multi-cuisine food courts.',
    freeEntry: true,
    estimatedCostInr: 0
  },
  {
    id: 'evt-goa-shigmo-carnival',
    destination: 'Goa',
    title: 'Goa Coastal Heritage & Float Carnival',
    category: 'Festival',
    dateRange: 'Seasonal Festival Week',
    venue: 'Panaji Promenade',
    description: 'Vibrant street parade showcasing traditional folk dances, giant mythic floats, and brass band music.',
    freeEntry: true,
    estimatedCostInr: 0
  },
  {
    id: 'evt-manali-winter-carnival',
    destination: 'Manali',
    title: 'Himalayan Folk Music & Craft Fair',
    category: 'Heritage',
    dateRange: 'Weekly Evenings',
    venue: 'Mall Road Amphitheater',
    description: 'Local Himachali folk artists perform with traditional drums (Dhol-Nagada) and exhibit handloom Kullu shawls.',
    freeEntry: true,
    estimatedCostInr: 0
  },
  {
    id: 'evt-jaipur-lit-culture',
    destination: 'Jaipur',
    title: 'Pink City Heritage Sound & Light Show',
    category: 'Heritage',
    dateRange: 'Daily 7:00 PM',
    venue: 'Amer Fort Kesar Kyari',
    description: 'A spectacular narration of Rajput bravery with grand light projections illuminating Amer Fort ramparts.',
    freeEntry: false,
    estimatedCostInr: 250
  },
  {
    id: 'evt-kerala-boat-race-drill',
    destination: 'Kerala',
    title: 'Punnamada Snake Boat Chundavallam Drill',
    category: 'Festival',
    dateRange: 'Weekend Mornings',
    venue: 'Punnamada Lake, Alleppey',
    description: 'Watch 100-oarsmen row magnificent snake boats in rhythmic unison singing traditional Vanchipattu songs.',
    freeEntry: true,
    estimatedCostInr: 0
  }
];
