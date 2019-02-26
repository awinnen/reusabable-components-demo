import { Component, OnInit, Input, TemplateRef, ElementRef, ViewContainerRef, HostListener, Inject, forwardRef } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'ngtwapl-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  host: {
    "style": "cursor: pointer;",
    "[class.selected]": "productList.selectedTile === this"
  }
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

  public data: any = { amount: 0 };

  public get price(): number {
    return this.data.amount * this.product.price;
  }
  constructor(@Inject(forwardRef(() => ProductListComponent)) private productList: ProductListComponent, public elementRef: ElementRef, public viewContainerRef: ViewContainerRef) { }

  public ngOnInit(): void {
  }

  @HostListener("click")
  public onDetailsOpenClick(): void {
    this.productList.openDetails(this);
  }

}
