import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiEndpoint, API_ENDPOINT } from '../../constants/api-endpoint';

@Injectable()
export class ApiEndpointInterceptor implements HttpInterceptor {
  constructor(@Inject(API_ENDPOINT) private readonly apiEndpoint: ApiEndpoint) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const fullUrlReq = req.clone({
      url: `${this.apiEndpoint.endpoint}/${this.apiEndpoint.version}/${req.url}`,
    });

    return next.handle(fullUrlReq);
  }
}
