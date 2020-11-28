import { Component, Input, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorGuardDirective } from './error-guard.directive';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@NgModule({
  declarations: [ErrorMessageComponent],
  entryComponents: [ErrorMessageComponent],
})
class ErrorMessageModule {}

@Component({
  template: '<div *appErrorGuard="data; data as dataWithoutError">{{ dataWithoutError }}</div>',
})
class WrapperComponent {
  @Input()
  data!: string | Error;
}

describe('ErrorGuardDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    jest.mock('../../components/error-message/error-message.component');

    fixture = TestBed.configureTestingModule({
      imports: [
        ErrorMessageModule,
      ],
      declarations: [
        ErrorGuardDirective,
        WrapperComponent,
      ],

    }).createComponent(WrapperComponent);

    fixture.componentInstance.data = 'Data without error';

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should render the component with the fallback error message', () => {
    fixture.componentInstance.data = new Error('Some error');

    fixture.detectChanges();

    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
