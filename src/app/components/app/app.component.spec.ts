import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Subject } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  const routerEvents = new Subject<Event>();

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: Router, useValue: { events: routerEvents } },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).createComponent(AppComponent);

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should render the component with the loader', () => {
    routerEvents.next(new NavigationStart(1, 'some/url'));

    fixture.detectChanges();

    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should render the component with the loader - navigation end', () => {
    routerEvents.next(new NavigationEnd(1, 'some/url', 'some end/url'));

    fixture.detectChanges();

    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
