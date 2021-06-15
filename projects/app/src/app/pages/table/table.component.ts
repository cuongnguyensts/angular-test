import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { getKeyValue } from 'projects/app/src/app/pages/table/util';
import { Observable, ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { BookService } from './book.service';
import { Book } from './models/book.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  private innerBooks$ = new ReplaySubject<MatTableDataSource<Book>>(1);
  public displayedColumns: string[] = ['id', 'type', 'links', 'attributes', 'relationships'];

  get books$(): Observable<MatTableDataSource<Book>> {
    return this.innerBooks$.asObservable();
  }

  public constructor(private bookService: BookService) {}

  public ngOnInit(): void {
    this.bookService
      .getList()
      .pipe(map(it => new MatTableDataSource(it)))
      .subscribe(it => this.innerBooks$.next(it));
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.books$.pipe(take(1)).subscribe({
      next: it => {
        it.filter = filterValue.trim().toLowerCase();
        it.filterPredicate = (data, filter) => {
          return (
            data.type.includes(filter) ||
            String(data.id).includes(filter) ||
            data.links.self.includes(filter) ||
            data.attributes.urn.includes(filter)
          );
        };
        this.innerBooks$.next(it);
      }
    });
  }

  public sortData($event: Sort): void {
    const key = $event.active as any;
    this.books$.pipe(take(1)).subscribe({
      next: it => {
        it.data = it.data.sort((a, b) =>
          $event.direction === 'desc'
            ? getKeyValue(b, key) - getKeyValue(a, key)
            : getKeyValue(a, key) - getKeyValue(b, key)
        );
        this.innerBooks$.next(it);
      }
    });
  }
}
