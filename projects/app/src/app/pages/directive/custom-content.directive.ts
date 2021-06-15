import { ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';

import { CustomTextComponent } from './custom-text/custom-text.component';

@Directive({
  selector: '[appCustomContent]'
})
export class CustomContentDirective {
  private _componentInstance!: CustomTextComponent;

  @Input('appCustomContent') set fieldName(value: string) {
    if (value) {
      if (!this._componentInstance) {
        const factory = this.componentFactory.resolveComponentFactory(CustomTextComponent);
        this._componentInstance = this.viewContainerRef.createComponent(factory).instance;
      }
      this._componentInstance.text = value;
    }
  }
  public constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private componentFactory: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}
}
