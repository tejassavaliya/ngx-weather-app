import { HttpHandler, HttpRequest } from '@angular/common/http';

import { API_ENDPOINT } from '../../constants/api-endpoint';
import { ApiEndpointInterceptor } from './api-endpoint.interceptor';
import { TestBed } from '@angular/core/testing';

describe('ApiEndpointInterceptor', () => {
  let service: ApiEndpointInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiEndpointInterceptor,
        {
          provide: API_ENDPOINT,
          useValue: {
            endpoint: 'http://api.endpoint',
            version: 'v3',
          },
        },
      ],
    });

    service = TestBed.inject(ApiEndpointInterceptor);
  });

  it('should add API endpoint prefix to the request', () => {
    const expectedResult = {};
    let handledReq!: HttpRequest<any>;

    const req = new HttpRequest('GET', 'some/url');
    const httpHandler = {
      handle: jest.fn(request => {
        handledReq = request;

        return expectedResult;
      }),
    } as unknown as HttpHandler;

    const result = service.intercept(req, httpHandler);

    expect(handledReq.url).toBe('http://api.endpoint/v3/some/url');
    expect(result).toBe(expectedResult);
  });
});
