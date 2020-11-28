import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { CityWeatherPageComponent } from './city-weather-page.component';
import { ErrorGuardDirective } from '../../../shared/directives/error-guard/error-guard.directive';
import { ForecastWeather } from '../../models/forecast-weather.model';

@Component({
  selector: 'app-timestamp-weather',
  template: '{{ weather | json }}',
})
class TimestampWeatherMockComponent {
  @Input()
  weather!: ForecastWeather;
}

describe('CityWeatherPageComponent', () => {
  let fixture: ComponentFixture<CityWeatherPageComponent>;

  beforeEach(() => {
    const activatedRouteMock = {
      snapshot: {
        params: {
          name: 'City1',
        },
        data: {
          forecast: [
            { temp: 20 },
            { temp: 21 },
            { temp: 22 },
          ],
        },
      },
    };

    fixture = TestBed.configureTestingModule({
      declarations: [
        CityWeatherPageComponent,
        TimestampWeatherMockComponent,
        ErrorGuardDirective,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).createComponent(CityWeatherPageComponent);

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
