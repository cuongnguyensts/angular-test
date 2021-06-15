import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlComponent } from 'projects/app-commons';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends ControlComponent<string> {
  @Input() public label!: string;

  @Output() public keyUpAction = new EventEmitter<Event>();

  public constructor(private changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
  }

  public handleKeyUpAction($event: KeyboardEvent): void {
    this.keyUpAction.emit($event);
  }
}
