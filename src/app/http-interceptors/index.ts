import { AccessTokenInterceptor } from './token/access-token.interceptor';
import { ApiEndpointInterceptor } from './api/api-endpoint.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './error/error.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ApiEndpointInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];
