import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgContentComponent } from './examples/ng-content/ng-content.component';
import { NgTemplateComponent } from './examples/ng-template/ng-template.component';
import { NgTemplateWithDefaultTemplateComponent } from './examples/ng-template-with-default-template/ng-template-with-default-template.component';
import { NgTemplateWithSectionalTemplatesComponent } from './examples/ng-template-with-sectional-templates/ng-template-with-sectional-templates.component';
import { NgTemplateWithAdvancedProductListComponent } from './examples/ng-template-with-advanced-product-list/ng-template-with-advanced-product-list.component';

const routes: Routes = [
  { path: "ngContent", component: NgContentComponent },
  { path: "ngTemplate", component: NgTemplateComponent }, 
  { path: "ngTemplateWithDefaultTemplate", component: NgTemplateWithDefaultTemplateComponent },
  { path: "ngTemplateWithSectionalTemplates", component: NgTemplateWithSectionalTemplatesComponent }, 
  { path: "ngTemplateWithAdvancedProductList", component: NgTemplateWithAdvancedProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
