import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgContentComponent } from './examples/ng-content/ng-content.component';

const routes: Routes = [
  { path: "ngContent", component: NgContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
