import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { NgTemplateComponent } from './ng-template.component';
import { TileComponent } from './components/tile/tile.component';

@NgModule({
  declarations: [ProductListComponent, NgTemplateComponent, TileComponent],
  imports: [
    CommonModule
  ],
  exports: [NgTemplateComponent]
})
export class NgTemplateModule { }
