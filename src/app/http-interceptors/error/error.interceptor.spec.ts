import { HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { HttpErrorInterceptor } from './error.interceptor';

describe('HttpErrorInterceptor', () => {
  let service: HttpErrorInterceptor;

  let requestResult: Subject<void>;
  let matSnackBarMock: MatSnackBar;
  let routerMock: Router;

  beforeEach(() => {
    requestResult = new Subject<void>();

    matSnackBarMock = {
      open: jest.fn(),
    } as unknown as typeof matSnackBarMock;

    routerMock = {
      navigate: jest.fn(),
    } as unknown as typeof routerMock;

    TestBed.configureTestingModule({
      providers: [
        HttpErrorInterceptor,
        { provide: MatSnackBar, useValue: matSnackBarMock },
        { provide: Router, useValue: routerMock },
      ],
    });

    service = TestBed.inject(HttpErrorInterceptor);
  });

  it('should return human readable error for failed GET requests', () => {
    const req = new HttpRequest('GET', 'some/url');
    const httpHandler = {
      handle: jest.fn(() => requestResult),
    } as unknown as HttpHandler;

    let result!: Error;

    service.intercept(req, httpHandler).subscribe(() => {}, x => result = x);

    requestResult.error(new HttpErrorResponse({}));

    expect(result.message).toBe('Unable to load data');
  });

  it('should return human readable error for failed POST requests', () => {
    const req = new HttpRequest('POST', 'some/url', null);
    const httpHandler = {
      handle: jest.fn(() => requestResult),
    } as unknown as HttpHandler;

    let result!: Error;

    service.intercept(req, httpHandler).subscribe(() => {}, x => result = x);

    requestResult.error(new HttpErrorResponse({}));

    expect(result.message).toBe('Unable to update data');
  });

  it('should show the error snackbar', () => {
    const req = new HttpRequest('GET', 'some/url');
    const httpHandler = {
      handle: jest.fn(() => requestResult),
    } as unknown as HttpHandler;

    let result!: Error;

    service.intercept(req, httpHandler).subscribe(() => {}, x => result = x);

    requestResult.error(new HttpErrorResponse({}));

    expect(matSnackBarMock.open).toHaveBeenCalledWith(
      'An error happened during interaction with the server side',
      'CLOSE',
      {
        horizontalPosition: 'right',
        verticalPosition: 'top',
      },
    );
  });
});
