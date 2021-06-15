import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {
  public proceed(): void {
    console.log('Action');
  }
}
