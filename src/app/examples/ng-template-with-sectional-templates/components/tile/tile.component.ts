import { Component, OnInit, Input, TemplateRef } from '@angular/core';
@Component({
  selector: 'ngtwst-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input()
  public tileContentTemplate: TemplateRef<any>;
  @Input()
  public tileHeaderTemplate: TemplateRef<any>;
  @Input()
  public tileActionsTemplate: TemplateRef<any>;
  @Input()
  public tileOverlayTemplate: TemplateRef<any>;
  @Input()
  public product: any;

  public data: { amount: number } = { amount: 0 };

  public get price(): number {
    return this.data.amount * this.product.price;
  }
  constructor() { }

  ngOnInit() {
  }

}
