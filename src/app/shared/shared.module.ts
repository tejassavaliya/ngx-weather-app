import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ErrorGuardDirective } from './directives/error-guard/error-guard.directive';
import { MaterialDesignModule } from './material-design/material-design.module';

@NgModule({
  declarations: [
    PageHeaderComponent,
    ErrorGuardDirective,
    ErrorMessageComponent,
  ],
  entryComponents: [
    ErrorMessageComponent,
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
    PageHeaderComponent,
    ErrorGuardDirective,
    ErrorMessageComponent,
  ],
})
export class SharedModule {}
