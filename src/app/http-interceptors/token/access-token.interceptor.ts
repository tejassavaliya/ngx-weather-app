import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessToken, API_ACCESS_TOKEN } from '../../constants/api-access-token';



@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
  constructor(@Inject(API_ACCESS_TOKEN) private readonly accessToken: AccessToken) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authenticatedReq = req.clone({
      params: req.params.set(this.accessToken.paramName, this.accessToken.value),
    });

    return next.handle(authenticatedReq);
  }
}
