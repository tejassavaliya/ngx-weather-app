import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeather } from '../../models/city-weather.model';
import { CityWeatherCardComponent } from './city-weather-card.component';
import { WeatherCondition } from '../../models/weather-condition.model';

@Component({
  selector: 'app-weather-condition-icon',
  template: '{{ weatherCondition | json }}',
})
class WeatherConditionIconMockComponent {
  @Input()
  weatherCondition!: WeatherCondition;
}

describe('CityWeatherCardComponent', () => {
  let fixture: ComponentFixture<CityWeatherCardComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        CityWeatherCardComponent,
        WeatherConditionIconMockComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).createComponent(CityWeatherCardComponent);

    fixture.componentInstance.weather = {
      name: 'City',
      main: {
        temp: 30.55,
      },
      wind: {
        speed: 5.5,
      },
      sys: {
        sunrise: 102332423,
        sunset: 102332777,
      },
      weather: [
        { id: 1, main: 'cloudy', description: 'cloudy', icon: '02d' },
      ],
    } as CityWeather;

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
