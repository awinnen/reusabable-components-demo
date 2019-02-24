import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgContentModule } from './examples/ng-content/ng-content.module';
import { NgTemplateModule } from './examples/ng-template/ng-template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgContentModule,
    NgTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
