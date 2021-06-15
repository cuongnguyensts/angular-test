import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  exports: [InputComponent]
})
export class InputModule {}
