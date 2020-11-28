import { Component, Input } from '@angular/core';

import { CityWeather } from '../../models/city-weather.model';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: 'city-weather-card.component.html',
  styleUrls: ['city-weather-card.component.scss'],
})
export class CityWeatherCardComponent {
  @Input()
  weather!: CityWeather;
}
