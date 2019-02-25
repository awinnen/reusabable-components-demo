import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgTemplateWithAdvancedProductListComponent } from './ng-template-with-advanced-product-list.component';
import { TileComponent } from './components/tile/tile.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HelperDirectivesModule } from '../../shared/directives.directive';

@NgModule({
  declarations: [NgTemplateWithAdvancedProductListComponent, TileComponent, ProductListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HelperDirectivesModule
  ],
  exports: [NgTemplateWithAdvancedProductListComponent]
})
export class NgTemplateWithAdvancedProductListModule { }
