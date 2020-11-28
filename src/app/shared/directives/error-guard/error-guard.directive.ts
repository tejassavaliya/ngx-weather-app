import { ComponentFactoryResolver, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Directive({
  selector: '[appErrorGuard]',
})
export class ErrorGuardDirective {
  @Input()
  set appErrorGuard(value: any) {
    this.viewContainerRef.clear();

    if (value instanceof Error) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(ErrorMessageComponent);
      const ref = this.viewContainerRef.createComponent(factory);

      ref.instance.message = value.message;
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef, { data: value });
    }
  }

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
  ) {}
}
