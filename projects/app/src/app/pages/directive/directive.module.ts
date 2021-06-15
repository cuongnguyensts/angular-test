import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '@shared/header/header.module';

import { CustomContentDirective } from './custom-content.directive';
import { CustomTextComponent } from './custom-text/custom-text.component';
import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';

@NgModule({
  declarations: [DirectiveComponent, CustomContentDirective, CustomTextComponent],
  imports: [CommonModule, HeaderModule, DirectiveRoutingModule]
})
export class DirectiveModule {}
