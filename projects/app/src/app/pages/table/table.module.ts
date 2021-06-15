import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { HeaderModule } from '@shared/header/header.module';
import { InputModule } from '@app-ui';

import { BookService } from './book.service';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    HeaderModule,
    MatTableModule,
    MatSortModule,
    InputModule
  ],
  providers: [BookService]
})
export class TableModule {}
