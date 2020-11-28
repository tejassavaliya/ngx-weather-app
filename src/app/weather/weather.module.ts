import { CityWeatherCardComponent } from './components/city-weather-card/city-weather-card.component';
import { CityWeatherPageComponent } from './components/city-weather-page/city-weather-page.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WeatherConditionIconComponent } from './components/weather-condition-icon/weather-condition-icon.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  imports: [
    SharedModule,
    WeatherRoutingModule,
  ],
  declarations: [
    CityWeatherCardComponent,
    CityWeatherPageComponent,
    WeatherConditionIconComponent,
    ForecastComponent,
  ],
  exports: [
    CityWeatherCardComponent,
  ],
})
export class WeatherModule {}
