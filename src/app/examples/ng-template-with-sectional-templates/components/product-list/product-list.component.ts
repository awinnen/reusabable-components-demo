import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';
import { TileContentDirective, TileHeaderDirective, TileActionsDirective, TileOverlayDirective } from '../../../../shared/directives.directive';

@Component({
  selector: 'ngtwst-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ContentChild(TileContentDirective)
  public contentDirective: TemplateRef<any>;
  @ContentChild(TileHeaderDirective)
  public headerDirective: TemplateRef<any>;
  @ContentChild(TileActionsDirective)
  public actionsDirective: TemplateRef<any>;
  @ContentChild(TileOverlayDirective)
  public overlayDirective: TemplateRef<any>;
  @Input()
  public products: any[];
  constructor() { }

  ngOnInit() {
  }

}
