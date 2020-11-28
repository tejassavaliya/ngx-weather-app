import { HttpClient, HttpParams } from '@angular/common/http';

import { CityWeather } from '../models/city-weather.model';
import { ForecastWeather } from '../models/forecast-weather.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  getCityId(name: string): Observable<number> {
    const params = { units: 'metric', q: name };
    return this.http.get<CityWeather>('weather', { params }).pipe(
      pluck('id'),
    );
  }

  getWeatherByCityId(id: number): Observable<any | Error> {
    const params = { id: id.toString() };
    const list = this.http.get<{ list: ForecastWeather[] }>('forecast', { params }).pipe(
      pluck('list'),
    );
    return list;
  }

  getWeatherByCityIds(ids: number[]): Observable<CityWeather[] | Error> {
    const params = { id: ids.join(','), units: 'metric' };
    return this.http.get<{ list: CityWeather[] }>('group', { params }).pipe(
      pluck('list'),
    );
  }

}
