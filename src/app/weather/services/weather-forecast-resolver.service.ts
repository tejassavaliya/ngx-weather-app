import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, first, switchMap } from 'rxjs/operators';

import { ForecastWeather } from '../models/forecast-weather.model';
import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastResolverService implements Resolve<ForecastWeather[] | Error> {
  constructor(
    private readonly weatherService: WeatherService,
    private readonly router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ForecastWeather[] | Error> | Observable<never> {
    const name = route.paramMap.get('name');

    if (!name) {
      this.goToHomePage();

      return EMPTY;
    }

    return this.weatherService.getCityId(name).pipe(
      first(),
      switchMap((cityId) => {
        return this.weatherService.getWeatherByCityId(cityId);
      }),
      catchError((e, _) => of(e)),
    );
  }

  private goToHomePage(): void {
    this.router.navigate(['/']);
  }
}
