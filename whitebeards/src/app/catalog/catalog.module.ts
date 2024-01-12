import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'; 
import { SharedModule } from '../shared/shared.module';
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class CatalogModule { }
