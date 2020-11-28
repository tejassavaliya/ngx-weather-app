import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { PageHeaderComponent } from './page-header.component';

@Component({
  template: '<app-page-header><h1>Some header</h1></app-page-header>',
})
class WrapperComponent {}

describe('ErrorGuardComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        PageHeaderComponent,
        WrapperComponent,
      ],
    }).createComponent(WrapperComponent);

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
