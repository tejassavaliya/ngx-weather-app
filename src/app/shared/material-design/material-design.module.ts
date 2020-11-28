// tslint:disable-next-line:match-default-export-name
import githubIcon from '!!raw-loader!./icons/github-circle-white-transparent.svg';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
})
export class MaterialDesignModule {
  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly donSanitizer: DomSanitizer,
  ) {
    this.registerCustomIcons();
  }

  private registerCustomIcons(): void {
    this.iconRegistry.addSvgIconLiteral('github', this.donSanitizer.bypassSecurityTrustHtml(githubIcon));
  }
}
