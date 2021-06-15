import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { BookApi } from './api/book.api';

@NgModule({
  imports: [HttpClientModule],
  providers: [BookApi]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
