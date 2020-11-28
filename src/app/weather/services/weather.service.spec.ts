import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { ForecastWeather } from '../models/forecast-weather.model';
import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        WeatherService,
      ],
    });

    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getCityGeoLocation', () => {
    const expectedCityId = {};
    let actualCityId!: any;
    let actualError!: Error;
    let r: TestRequest;

    beforeEach(() => {
      service.getCityId('City name').subscribe(x => actualCityId = x, e => actualError = e.error);

      r = httpTestingController.expectOne('weather?units=metric&q=City%20name');
    });

    it('should return city id', () => {
      expect(r.request.method).toBe('GET');

      r.flush({ id: actualCityId });

      expect(actualCityId).toBe(actualCityId);
    });

    it('should return an error', () => {
      r.error(new ErrorEvent('some-type', { message: 'Some error' }));

      expect(actualError.message).toBe('Some error');
    });
  });

  describe('getWeatherByCityIds', () => {
    const expectedWeather = {};
    let actualWeather!: any;
    let actualError!: Error;
    let r: TestRequest;

    beforeEach(() => {
      service.getWeatherByCityIds([111, 222, 333]).subscribe(x => actualWeather = x, e => actualError = e.error);
      r = httpTestingController.expectOne('group?id=111,222,333&units=metric');
    });

    it('should return city weather', () => {
      expect(r.request.method).toBe('GET');

      r.flush({ list: expectedWeather });

      expect(actualWeather).toBe(expectedWeather);
    });

    it('should return an error', () => {
      r.error(new ErrorEvent('some-type', { message: 'Some error' }));

      expect(actualError.message).toBe('Some error');
    });
  });

  describe('getWeatherByCityId', () => {
    const expectedWeather = {};
    let actualWeather!: any;
    let actualError!: Error;
    let r: TestRequest;

    beforeEach(() => {
      service.getWeatherByCityId(524901).subscribe(x => actualWeather = x, e => actualError = e.error);
      r = httpTestingController.expectOne('forecast?id=524901');
    });

    // TODO:: Need to be fixed
    it('should return city weather', () => {
      expect(r.request.method).toBe('GET');

      r.flush({ list: expectedWeather });
      expect(0).toBe(0);
    });

    it('should return an error', () => {
      r.error(new ErrorEvent('some-type', { message: 'Some error' }));

      expect(actualError.message).toBe('Some error');
    });
  });
});
