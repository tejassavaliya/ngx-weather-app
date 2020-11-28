import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        ErrorMessageComponent,
      ],
    }).createComponent(ErrorMessageComponent);

    fixture.componentInstance.message = 'Some error message';

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
