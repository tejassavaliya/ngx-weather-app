import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { ForecastWeather } from '../../models/forecast-weather.model';

@Component({
  selector: 'app-weather-condition-icon',
  template: '{{ weatherCondition | json }}',
})
class WeatherConditionIconMockComponent {
  @Input()
  weatherCondition!: ForecastWeather;
}

describe('ForecastComponent', () => {
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        ForecastComponent,
        WeatherConditionIconMockComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).createComponent(ForecastComponent);

    fixture.componentInstance.weather = {
      dt: 1606500000,
      main: {
        temp: 273.4,
        feels_like: 268.96,
        temp_min: 273.4,
        temp_max: 273.46,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 995,
        humidity: 96,
        temp_kf: -0.06
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n'
        }
      ],
      clouds: {
        all: 95
      },
      wind: {
        speed: 3.44,
        deg: 190
      },
      visibility: 106,
      pop: 0.4,
      snow: {
        '3h': 0.19
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-11-27 18:00:00'
    } as ForecastWeather;

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
