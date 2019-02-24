import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgContentComponent } from './examples/ng-content/ng-content.component';
import { NgTemplateComponent } from './examples/ng-template/ng-template.component';

const routes: Routes = [
  { path: "ngContent", component: NgContentComponent },
  { path: "ngTemplate", component: NgTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
