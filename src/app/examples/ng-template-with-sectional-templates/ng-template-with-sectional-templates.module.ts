import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgTemplateWithSectionalTemplatesComponent } from './ng-template-with-sectional-templates.component';
import { TileComponent } from './components/tile/tile.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HelperDirectivesModule } from '../../shared/directives.directive';

@NgModule({
  declarations: [NgTemplateWithSectionalTemplatesComponent, TileComponent, ProductListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HelperDirectivesModule
  ],
  exports: [NgTemplateWithSectionalTemplatesComponent]
})
export class NgTemplateWithSectionalTemplatesModule { }
