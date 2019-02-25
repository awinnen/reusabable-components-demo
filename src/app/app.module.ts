import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgContentModule } from './examples/ng-content/ng-content.module';
import { NgTemplateModule } from './examples/ng-template/ng-template.module';
import { TileActionsDirective, TileDirective, TileHeaderDirective, TileOverlayDirective } from './shared/directives.directive';
import { NgTemplateWithDefaultTemplateModule } from './examples/ng-template-with-default-template/ng-template-with-default-template.module';

@NgModule({
  declarations: [
    AppComponent,
    TileActionsDirective,
    TileDirective,
    TileHeaderDirective,
    TileOverlayDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgContentModule,
    NgTemplateModule,
    NgTemplateWithDefaultTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
