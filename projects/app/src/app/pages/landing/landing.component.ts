import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { noop } from 'rxjs';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {
  public constructor(private router: Router) {}

  public proceed(): void {
    this.router.navigate(['/table']).then(noop);
  }
}
