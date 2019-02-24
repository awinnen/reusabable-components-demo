import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgContentComponent } from './examples/ng-content/ng-content.component';
import { NgContentModule } from 'src/app/examples/ng-content/ng-content.module';
import { NgTemplateModule } from 'src/app/examples/ng-template/ng-template.module';

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
