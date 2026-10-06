export interface WeatherForecast {
  destination: string;
  dayIndex: number;
  condition: 'Sunny' | 'Rainy' | 'Cloudy' | 'Pleasant';
  tempC: number;
  humidity: number;
  windKmh: number;
  icon: string;
  recommendationNote: string;
}

export const DESTINATION_WEATHER: Record<string, WeatherForecast[]> = {
  goa: [
    {
      destination: 'Goa',
      dayIndex: 1,
      condition: 'Sunny',
      tempC: 31,
      humidity: 68,
      windKmh: 14,
      icon: 'Sun',
      recommendationNote: 'Ideal for water sports, scuba diving and beach sunset views.'
    },
    {
      destination: 'Goa',
      dayIndex: 2,
      condition: 'Pleasant',
      tempC: 29,
      humidity: 65,
      windKmh: 12,
      icon: 'CloudSun',
      recommendationNote: 'Great weather for Latin Quarter heritage walks & spice farm buffet.'
    },
    {
      destination: 'Goa',
      dayIndex: 3,
      condition: 'Sunny',
      tempC: 30,
      humidity: 70,
      windKmh: 16,
      icon: 'Sun',
      recommendationNote: 'Perfect breeze for coastal fort walks & cliffside sunset dinners.'
    },
    {
      destination: 'Goa',
      dayIndex: 4,
      condition: 'Cloudy',
      tempC: 28,
      humidity: 75,
      windKmh: 18,
      icon: 'Cloud',
      recommendationNote: 'Milder sun; great for exploring Dudhsagar waterfall trek.'
    }
  ],
  manali: [
    {
      destination: 'Manali',
      dayIndex: 1,
      condition: 'Pleasant',
      tempC: 18,
      humidity: 50,
      windKmh: 8,
      icon: 'CloudSun',
      recommendationNote: 'Crisp mountain air, great for Solang valley paragliding.'
    },
    {
      destination: 'Manali',
      dayIndex: 2,
      condition: 'Sunny',
      tempC: 20,
      humidity: 45,
      windKmh: 10,
      icon: 'Sun',
      recommendationNote: 'Clear skies for Jogini waterfall pine forest trek.'
    },
    {
      destination: 'Manali',
      dayIndex: 3,
      condition: 'Pleasant',
      tempC: 17,
      humidity: 55,
      windKmh: 12,
      icon: 'CloudSun',
      recommendationNote: 'Chilly evening ideal for Old Manali cafe crawl.'
    }
  ],
  jaipur: [
    {
      destination: 'Jaipur',
      dayIndex: 1,
      condition: 'Sunny',
      tempC: 28,
      humidity: 40,
      windKmh: 9,
      icon: 'Sun',
      recommendationNote: 'Bright morning ideal for Amer Fort mirror hall exploration.'
    },
    {
      destination: 'Jaipur',
      dayIndex: 2,
      condition: 'Pleasant',
      tempC: 26,
      humidity: 42,
      windKmh: 11,
      icon: 'CloudSun',
      recommendationNote: 'Comfortable breeze for Pink City bazaar shopping & street food.'
    },
    {
      destination: 'Jaipur',
      dayIndex: 3,
      condition: 'Sunny',
      tempC: 27,
      humidity: 38,
      windKmh: 10,
      icon: 'Sun',
      recommendationNote: 'Clear sunset for Nahargarh Fort panoramic city view.'
    }
  ],
  kerala: [
    {
      destination: 'Kerala',
      dayIndex: 1,
      condition: 'Pleasant',
      tempC: 29,
      humidity: 78,
      windKmh: 10,
      icon: 'CloudSun',
      recommendationNote: 'Gentle breeze for tranquil Alleppey backwater canoe rides.'
    },
    {
      destination: 'Kerala',
      dayIndex: 2,
      condition: 'Cloudy',
      tempC: 27,
      humidity: 80,
      windKmh: 12,
      icon: 'Cloud',
      recommendationNote: 'Misty weather enhancing Munnar tea garden walk photography.'
    },
    {
      destination: 'Kerala',
      dayIndex: 3,
      condition: 'Pleasant',
      tempC: 28,
      humidity: 74,
      windKmh: 9,
      icon: 'CloudSun',
      recommendationNote: 'Comfortable evening for Kathakali cultural performances.'
    }
  ],
  mumbai: [
    {
      destination: 'Mumbai',
      dayIndex: 1,
      condition: 'Pleasant',
      tempC: 30,
      humidity: 72,
      windKmh: 15,
      icon: 'CloudSun',
      recommendationNote: 'Pleasant sea breeze along Marine Drive promenade.'
    },
    {
      destination: 'Mumbai',
      dayIndex: 2,
      condition: 'Sunny',
      tempC: 32,
      humidity: 70,
      windKmh: 14,
      icon: 'Sun',
      recommendationNote: 'Sunny afternoon for Chowpatty street food and heritage walks.'
    }
  ],
  udaipur: [
    {
      destination: 'Udaipur',
      dayIndex: 1,
      condition: 'Sunny',
      tempC: 27,
      humidity: 45,
      windKmh: 8,
      icon: 'Sun',
      recommendationNote: 'Sparkling sunlight on Lake Pichola for palace boat rides.'
    },
    {
      destination: 'Udaipur',
      dayIndex: 2,
      condition: 'Pleasant',
      tempC: 25,
      humidity: 48,
      windKmh: 10,
      icon: 'CloudSun',
      recommendationNote: 'Cool evening for Bagore Ki Haveli folk dance night.'
    }
  ],
  rishikesh: [
    {
      destination: 'Rishikesh',
      dayIndex: 1,
      condition: 'Sunny',
      tempC: 24,
      humidity: 50,
      windKmh: 7,
      icon: 'Sun',
      recommendationNote: 'Crystal clear weather for white water rafting & cliff jumps.'
    },
    {
      destination: 'Rishikesh',
      dayIndex: 2,
      condition: 'Pleasant',
      tempC: 22,
      humidity: 55,
      windKmh: 9,
      icon: 'CloudSun',
      recommendationNote: 'Calm river air for Triveni Ghat evening Maha Aarti ceremony.'
    }
  ]
};

export const DEFAULT_WEATHER_FORECAST: WeatherForecast = {
  destination: 'India',
  dayIndex: 1,
  condition: 'Sunny',
  tempC: 28,
  humidity: 60,
  windKmh: 12,
  icon: 'Sun',
  recommendationNote: 'Fair weather conditions for outdoor sightseeing and exploration.'
};
