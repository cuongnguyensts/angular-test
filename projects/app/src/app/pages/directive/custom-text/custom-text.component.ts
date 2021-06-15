import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  template: `{{ message }}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTextComponent {
  private _message!: string;

  get message(): string {
    return this._message;
  }

  set text(value: string) {
    if (value !== this._message) {
      this._message = value;
      this.changeDetector.detectChanges();
    }
  }

  public constructor(private changeDetector: ChangeDetectorRef) {}
}
