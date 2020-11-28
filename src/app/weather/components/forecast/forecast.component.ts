import { Component, Input } from '@angular/core';
import { ForecastWeather } from '../../models/forecast-weather.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent{
  @Input()
  weather!: ForecastWeather;

}
