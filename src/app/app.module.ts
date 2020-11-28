import { API_ACCESS_TOKEN } from './constants/api-access-token';
import { API_ENDPOINT } from './constants/api-endpoint';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { City } from './enum/city.enum';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MAIN_PAGE_CITY_IDS } from './constants/main-page-city-ids';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { WeatherModule } from './weather/weather.module';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    WeatherModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  providers: [
    {
      provide: API_ACCESS_TOKEN,
      useValue: {
        paramName: 'APPID',
        value: 'dfcc4c8ffb4d85e5183930398cbcacff',
      },
    },
    {
      provide: API_ENDPOINT,
      useValue: {
        endpoint: 'https://api.openweathermap.org/data',
        version: '2.5',
      },
    },
    {
      provide: MAIN_PAGE_CITY_IDS,
      useValue: [
        City.Amsterdam,
        City.Moscow,
        City.London,
        City.Paris,
        City.Madrid,
      ],
    },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
