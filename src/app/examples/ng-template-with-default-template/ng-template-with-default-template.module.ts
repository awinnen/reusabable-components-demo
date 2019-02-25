import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTemplateWithDefaultTemplateComponent } from './ng-template-with-default-template.component';
import { TileComponent } from './components/tile/tile.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [NgTemplateWithDefaultTemplateComponent, TileComponent, ProductListComponent],
  imports: [
    CommonModule
  ],
  exports: [NgTemplateWithDefaultTemplateComponent]
})
export class NgTemplateWithDefaultTemplateModule { }
