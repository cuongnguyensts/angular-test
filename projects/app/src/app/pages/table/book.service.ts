import { Injectable } from '@angular/core';
import { BookApi } from 'projects/app/src/app/core/api/book.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from './models/book.model';

@Injectable()
export class BookService {
  public constructor(private bookApi: BookApi) {}

  public getList(): Observable<Book[]> {
    return this.bookApi.getList().pipe(map(it => it.data.map(book => ({...book, id: Number(book.id)}))));
  }
}
