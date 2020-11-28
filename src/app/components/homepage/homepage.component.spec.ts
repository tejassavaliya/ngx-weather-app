import { Component, Directive, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ErrorGuardDirective } from '../../shared/directives/error-guard/error-guard.directive';
import { HomepageComponent } from './homepage.component';
import { MAIN_PAGE_CITY_IDS } from '../../constants/main-page-city-ids';
import { WeatherService } from '../../weather/services/weather.service';
import { of } from 'rxjs';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[routerLink]',
})
class RouterLinkMockDirective {
  @Input()
  routerLink!: string[];
}

@Component({
  selector: 'app-city-weather-card',
  template: '',
})
class CityWeatherCardMockComponent {}

describe('HomepageComponent', () => {
  let fixture: ComponentFixture<HomepageComponent>;

  let weatherServiceMock: WeatherService;
  const cityIds = [1, 2 ,3];
  const mockCitiesWeather = [
    { id: 1, name: 'City1' },
    { id: 2, name: 'City2' },
    { id: 3, name: 'City3' },
  ];

  beforeEach(() => {
    weatherServiceMock = {
      getWeatherByCityIds: jest.fn(() => of(mockCitiesWeather)),
    } as unknown as typeof weatherServiceMock;

    fixture = TestBed.configureTestingModule({
      declarations: [
        HomepageComponent,
        RouterLinkMockDirective,
        CityWeatherCardMockComponent,
        ErrorGuardDirective,
      ],
      providers: [
        { provide: MAIN_PAGE_CITY_IDS, useValue: cityIds },
        { provide: WeatherService, useValue: weatherServiceMock },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).createComponent(HomepageComponent);

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should have routerLink initialized', () => {
    const cities = fixture.debugElement.queryAll(By.directive(CityWeatherCardMockComponent));

    expect(cities[0].injector.get(RouterLinkMockDirective).routerLink).toEqual(['/', 'City1', 'forecast']);
    expect(cities[1].injector.get(RouterLinkMockDirective).routerLink).toEqual(['/', 'City2', 'forecast']);
    expect(cities[2].injector.get(RouterLinkMockDirective).routerLink).toEqual(['/', 'City3', 'forecast']);
  });
});
