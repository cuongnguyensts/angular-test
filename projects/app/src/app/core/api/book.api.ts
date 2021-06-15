import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../models/book.model';
import { ResponseModel } from '../models/response-model.model';

@Injectable()
export class BookApi {
  public constructor(protected http: HttpClient) {}

  public getList(): Observable<ResponseModel<Book>> {
    return this.http.get<ResponseModel<Book>>(
      `https://raw.githubusercontent.com/PerxTech/angular-interview/master/example.json`
    );
  }
}
