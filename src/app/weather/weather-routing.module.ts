import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityWeatherPageComponent } from './components/city-weather-page/city-weather-page.component';
import { WeatherForecastResolverService } from './services/weather-forecast-resolver.service';

const routes: Routes = [
  {
    path: ':name/forecast',
    component: CityWeatherPageComponent,
    resolve: {
      forecast: WeatherForecastResolverService,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class WeatherRoutingModule {}
