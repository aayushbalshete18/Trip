export interface AccommodationOption {
  id: string;
  name: string;
  type: 'Hostel / Dorm' | 'Boutique Stay' | 'Resort' | 'Homestay';
  costPerNight: number;
  originalPrice?: number;
  rating: number;
  location: string;
  amenities: string[];
  imageUrl: string;
  isPriceSpiked?: boolean;
}

export const travelPriceService = {
  getAccommodationOptions: (destinationName: string): AccommodationOption[] => {
    const key = destinationName.toLowerCase().trim();
    if (key.includes('goa')) {
      return [
        {
          id: 'goa-hostel-zostel',
          name: 'Zostel Goa (Vagator Cliffside)',
          type: 'Hostel / Dorm',
          costPerNight: 750,
          rating: 4.8,
          location: 'Vagator, 400m from beach',
          amenities: ['Free WiFi', 'AC Dorms', 'Rooftop Cafe', 'Social Events'],
          imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 'goa-stay-spiked',
          name: 'Heritage Portuguese Villa Stay',
          type: 'Boutique Stay',
          costPerNight: 2800,
          originalPrice: 2000,
          rating: 4.5,
          location: 'Anjuna Beach Road',
          amenities: ['Swimming Pool', 'Breakfast Included', 'Balcony'],
          imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
          isPriceSpiked: true
        },
        {
          id: 'goa-stay-alt-1',
          name: 'Palm Grove Eco Cottages',
          type: 'Homestay',
          costPerNight: 2100,
          rating: 4.7,
          location: 'Candolim, 600m from beach',
          amenities: ['Garden View', 'Free Breakfast', 'Scooter Rental'],
          imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 'goa-stay-alt-2',
          name: 'Blue Wave Coastal Boutique Rooms',
          type: 'Boutique Stay',
          costPerNight: 2300,
          rating: 4.6,
          location: 'Calangute quieter lane',
          amenities: ['Swimming Pool', 'Air Conditioning', 'Free Parking'],
          imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80'
        }
      ];
    }

    // Default general options
    return [
      {
        id: 'gen-hostel',
        name: `${destinationName} Backpackers Hub`,
        type: 'Hostel / Dorm',
        costPerNight: 700,
        rating: 4.7,
        location: 'City Center',
        amenities: ['Free WiFi', 'Locker', 'Shared Kitchen'],
        imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'gen-spiked',
        name: `${destinationName} Grand Royal Residency`,
        type: 'Boutique Stay',
        costPerNight: 2900,
        originalPrice: 2100,
        rating: 4.4,
        location: 'Mall Road / Main Promenade',
        amenities: ['Breakfast', 'City View', 'AC'],
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
        isPriceSpiked: true
      },
      {
        id: 'gen-alt',
        name: `${destinationName} Green Vista Eco Lodge`,
        type: 'Homestay',
        costPerNight: 2150,
        rating: 4.8,
        location: '1.2 km from Center',
        amenities: ['Mountain/Garden View', 'Home Cooked Meals', 'Fast WiFi'],
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80'
      }
    ];
  },

  checkPriceSpike: (destinationName: string, selectedAccommodationCost: number = 2800) => {
    return {
      hasSpike: true,
      item: `${destinationName} Heritage Portuguese Villa`,
      originalPrice: 2000,
      currentPrice: selectedAccommodationCost,
      spikeAmount: selectedAccommodationCost - 2000,
      percentageIncrease: Math.round(((selectedAccommodationCost - 2000) / 2000) * 100),
      suggestedAlternatives: [
        {
          id: 'alt-1',
          name: 'Palm Grove Eco Cottages',
          price: 2100,
          saving: selectedAccommodationCost - 2100,
          rating: 4.7,
          distance: '600m from beach'
        },
        {
          id: 'alt-2',
          name: 'Blue Wave Coastal Boutique Rooms',
          price: 2300,
          saving: selectedAccommodationCost - 2300,
          rating: 4.6,
          distance: 'Calangute quieter lane'
        }
      ]
    };
  }
};
