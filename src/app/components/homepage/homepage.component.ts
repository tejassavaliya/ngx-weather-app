import { Component, Inject } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MAIN_PAGE_CITY_IDS } from '../../constants/main-page-city-ids';
import { CityWeather } from '../../weather/models/city-weather.model';
import { WeatherService } from '../../weather/services/weather.service';

@Component({
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.scss'],
})
export class HomepageComponent {
  citiesWeather$ = this.weatherService.getWeatherByCityIds(this.cityIds).pipe(
    catchError((e, _) => of(e)),
  );

  constructor(
    @Inject(MAIN_PAGE_CITY_IDS) private readonly cityIds: number[],
    private readonly weatherService: WeatherService,
  ) {}

  trackById(index: number, value: CityWeather): number {
    return value.id;
  }
}
