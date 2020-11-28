import { HttpHandler, HttpRequest } from '@angular/common/http';

import { API_ACCESS_TOKEN } from '../../constants/api-access-token';
import { AccessTokenInterceptor } from './access-token.interceptor';
import { TestBed } from '@angular/core/testing';

describe('AccessTokenInterceptor', () => {
  let service: AccessTokenInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccessTokenInterceptor,
        {
          provide: API_ACCESS_TOKEN,
          useValue: {
            paramName: 'accessTokenParamName',
            value: 'accessTokenValue',
          },
        },
      ],
    });

    service = TestBed.inject(AccessTokenInterceptor);
  });

  it('should add an access token to the request', () => {
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

    expect(handledReq.params.get('accessTokenParamName')).toBe('accessTokenValue');
    expect(result).toBe(expectedResult);
  });
});
