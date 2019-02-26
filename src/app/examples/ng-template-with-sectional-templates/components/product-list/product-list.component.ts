import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';
import { TileContentDirective, TileHeaderDirective, TileActionsDirective, TileOverlayDirective } from '../../../../shared/directives.directive';

@Component({
  selector: 'ngtwst-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ContentChild(TileContentDirective)
  public contentDirective: TileContentDirective;
  @ContentChild(TileHeaderDirective)
  public headerDirective: TileHeaderDirective;
  @ContentChild(TileActionsDirective)
  public actionsDirective: TileActionsDirective;
  @ContentChild(TileOverlayDirective)
  public overlayDirective: TileOverlayDirective;
  @Input()
  public products: any[];
  constructor() { }

  ngOnInit() {
  }

}
