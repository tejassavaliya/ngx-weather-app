import { ForecastWeather } from './forecast-weather.model';

export interface CurrentWeather extends ForecastWeather {
  sunrise: number;
  sunset: number;
  uvi: number;
}
