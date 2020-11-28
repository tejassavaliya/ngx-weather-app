import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCondition } from '../../models/weather-condition.model';

import { WeatherConditionIconComponent } from './weather-condition-icon.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<WeatherConditionIconComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        WeatherConditionIconComponent,
      ],
    }).createComponent(WeatherConditionIconComponent);
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should render the component when the weather condition is set', () => {
    fixture.componentInstance.weatherCondition = {
      icon: '02d',
      description: 'few clouds',
    } as WeatherCondition;

    fixture.detectChanges();

    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should render the component when the weather condition and size are set', () => {
    fixture.componentInstance.weatherCondition = {
      icon: '02d',
      description: 'few clouds',
    } as WeatherCondition;

    fixture.componentInstance.size = '4x';

    fixture.detectChanges();

    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
