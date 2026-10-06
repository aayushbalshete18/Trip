import { DESTINATION_WEATHER, DEFAULT_WEATHER_FORECAST, WeatherForecast } from '../data/mockWeather';

export const weatherService = {
  getWeather: (destinationName: string, dayIndex: number = 1): WeatherForecast => {
    const key = destinationName.toLowerCase().trim();
    const forecasts = DESTINATION_WEATHER[key] || [];
    if (forecasts.length > 0) {
      const idx = (dayIndex - 1) % forecasts.length;
      return forecasts[idx];
    }
    return {
      ...DEFAULT_WEATHER_FORECAST,
      destination: destinationName,
      dayIndex
    };
  },

  getMultiDayForecast: (destinationName: string, totalDays: number): WeatherForecast[] => {
    const key = destinationName.toLowerCase().trim();
    const forecasts = DESTINATION_WEATHER[key] || [];
    const results: WeatherForecast[] = [];

    for (let day = 1; day <= totalDays; day++) {
      if (forecasts.length > 0) {
        const source = forecasts[(day - 1) % forecasts.length];
        results.push({
          ...source,
          dayIndex: day
        });
      } else {
        results.push({
          ...DEFAULT_WEATHER_FORECAST,
          destination: destinationName,
          dayIndex: day
        });
      }
    }
    return results;
  },

  isActivityWeatherSuitable: (
    suitableWeather: ('Sunny' | 'Rainy' | 'Cloudy' | 'Pleasant')[],
    currentCondition: 'Sunny' | 'Rainy' | 'Cloudy' | 'Pleasant'
  ): boolean => {
    return suitableWeather.includes(currentCondition);
  }
};
