import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentComponent } from '../ng-content/ng-content.component';

import { TileComponent } from './components/tile/tile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgContentComponent, TileComponent],
  exports: [ NgContentComponent]
})
export class NgContentModule { }
