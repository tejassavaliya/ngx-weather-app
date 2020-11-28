import { BaseWeather } from './base-weather.model';
import { CountryCode } from './country.enum';
import { GeoLocation } from './geo-location.model';
import { WeatherCondition } from './weather-condition.model';

export interface CityWeather {
  coord: GeoLocation;
  weather: WeatherCondition[];
  base: string;
  main: BaseWeather;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  rain?: {
    '1h': number;
    '3h': number;
  };
  snow?: {
    '1h': number;
    '3h': number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: string;
    country: CountryCode;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
