import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

const GENERIC_GET_ERROR_MESSAGE = 'Unable to load data';
const GENERIC_POST_PUT_DELETE_ERROR_MESSAGE = 'Unable to update data';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly router: Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(() => {
        const message = req.method === 'GET' ?
          GENERIC_GET_ERROR_MESSAGE :
          GENERIC_POST_PUT_DELETE_ERROR_MESSAGE;

        this.showErrorNotification();

        return throwError(new Error(message));
      }),
    );
  }

  private showErrorNotification(): void {
    this.snackBar.open('An error happened during interaction with the server side', 'CLOSE', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
