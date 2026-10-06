import { Destination } from '../types/trip';

export const DESTINATIONS: Destination[] = [
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    country: 'India',
    tagline: 'Sun, Sand, Heritage & Thrill',
    description: 'A vibrant tropical paradise blending Portuguese colonial architecture, serene beaches, adrenaline-pumping water sports, lively night markets, and authentic seafood shacks.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    popularFor: ['Beaches', 'Water Sports', 'Nightlife', 'Portuguese Heritage', 'Seafood'],
    averageDailyCost: {
      budget: 1800,
      balanced: 3500,
      luxury: 8000
    },
    bestTimeToVisit: 'Nov - Feb',
    rating: 4.8,
    reviewCount: 1420,
    coordinates: { lat: 15.2993, lng: 74.124 }
  },
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    country: 'India',
    tagline: 'Snow Peaks, River Rafting & Pine Forests',
    description: 'Nestled in the Beas River Valley, Manali offers breathtaking Himalayan panoramas, Solang Valley adventures, cozy cafes in Old Manali, and serene apple orchards.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    popularFor: ['Trekking', 'Snow Activities', 'Old Manali Cafes', 'Paragliding', 'Waterfalls'],
    averageDailyCost: {
      budget: 1600,
      balanced: 3200,
      luxury: 7500
    },
    bestTimeToVisit: 'Oct - Jun',
    rating: 4.7,
    reviewCount: 980,
    coordinates: { lat: 32.2396, lng: 77.1887 }
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    tagline: 'The Pink City of Palaces & Forts',
    description: 'The royal capital of Rajasthan, celebrated for grand hill forts like Amer Fort, the iconic Hawa Mahal facade, vibrant bazaar jewelry, and mouthwatering Rajasthani thalis.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    popularFor: ['Amer Fort', 'Hawa Mahal', 'Bazaars', 'Heritage Cuisine', 'Photography'],
    averageDailyCost: {
      budget: 1500,
      balanced: 3000,
      luxury: 7000
    },
    bestTimeToVisit: 'Oct - Mar',
    rating: 4.6,
    reviewCount: 1150,
    coordinates: { lat: 26.9124, lng: 75.7873 }
  },
  {
    id: 'kerala',
    name: 'Kerala',
    state: 'Kerala',
    country: 'India',
    tagline: 'God’s Own Country: Backwaters & Tea Hills',
    description: 'A tranquil tapestry of palm-fringed Alleppey backwater houseboats, misty Munnar tea plantations, Ayurvedic wellness retreats, and coastal Kathakali performances.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    popularFor: ['Backwaters', 'Tea Gardens', 'Ayurveda', 'Spice Plantations', 'Houseboats'],
    averageDailyCost: {
      budget: 2000,
      balanced: 3800,
      luxury: 8500
    },
    bestTimeToVisit: 'Sep - Mar',
    rating: 4.9,
    reviewCount: 1680,
    coordinates: { lat: 9.9312, lng: 76.2673 }
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    tagline: 'City of Dreams & Coastal Nostalgia',
    description: 'The fast-paced financial and entertainment heartbeat of India, offering Marine Drive sunsets, historic Victorian architecture, bustling street food stalls, and Bollywood magic.',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    popularFor: ['Marine Drive', 'Gateway of India', 'Street Food', 'Art Deco', 'Nightlife'],
    averageDailyCost: {
      budget: 2200,
      balanced: 4500,
      luxury: 10000
    },
    bestTimeToVisit: 'Nov - Feb',
    rating: 4.6,
    reviewCount: 1320,
    coordinates: { lat: 18.922, lng: 72.8347 }
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
    tagline: 'City of Lakes & Regal Romance',
    description: 'Known as the Venice of the East, Udaipur is studded with shimmering lakes, majestic marble palaces, rooftop dinners overlooking Lake Pichola, and vintage car galleries.',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80',
    popularFor: ['Lake Pichola', 'City Palace', 'Rooftop Dining', 'Sunset Cruises', 'Art'],
    averageDailyCost: {
      budget: 1800,
      balanced: 3600,
      luxury: 8500
    },
    bestTimeToVisit: 'Oct - Mar',
    rating: 4.8,
    reviewCount: 890,
    coordinates: { lat: 24.5854, lng: 73.7125 }
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    country: 'India',
    tagline: 'Yoga Capital & White Water Adventure',
    description: 'Set on the banks of the sacred Ganges at the Himalayan foothills, famous for thrilling river rafting, cliff jumping, evening Ganga Aarti, and serene riverside ashrams.',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
    popularFor: ['Ganga Rafting', 'Bungee Jumping', 'Yoga & Meditation', 'Ganga Aarti', 'Beatles Ashram'],
    averageDailyCost: {
      budget: 1400,
      balanced: 2800,
      luxury: 6500
    },
    bestTimeToVisit: 'Sep - May',
    rating: 4.7,
    reviewCount: 760,
    coordinates: { lat: 30.0869, lng: 78.2676 }
  }
];
