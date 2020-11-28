import { CountryCode } from './country.enum';
import { GeoLocation } from './geo-location.model';

export interface City {
  id: number;
  name: string;
  coord: GeoLocation;
  country: CountryCode,
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
