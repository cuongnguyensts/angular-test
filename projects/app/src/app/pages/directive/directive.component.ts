import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectiveComponent implements OnInit {
  public text$!: Observable<string>;

  public constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.text$ = this.activatedRoute.queryParamMap.pipe(map(it => (it.get('custom-text') || 'Lorem Up') as string));
  }
}
