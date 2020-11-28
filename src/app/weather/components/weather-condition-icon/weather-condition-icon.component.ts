import { Component, Input } from '@angular/core';

import { WeatherCondition } from '../../models/weather-condition.model';

@Component({
  selector: 'app-weather-condition-icon',
  templateUrl: 'weather-condition-icon.component.html',
  styleUrls: ['weather-condition-icon.component.scss']
})
export class WeatherConditionIconComponent {
  @Input()
  weatherCondition!: WeatherCondition;

  @Input()
  size: '2x' | '4x' | undefined;

  get weatherIconLink(): string {
    const icon = [this.weatherCondition.icon];

    if (this.size) {
      icon.push(this.size);
    }

    return `http://openweathermap.org/img/wn/${icon.join('@')}.png`;
  }

  get weatherDescription(): string {
    return this.weatherCondition.description;
  }
}
