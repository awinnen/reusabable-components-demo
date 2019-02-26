import { Component, OnInit, ContentChild, TemplateRef, Input, ViewContainerRef, ViewChildren, QueryList, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { TileContentDirective, TileHeaderDirective, TileActionsDirective, TileOverlayDirective, DetailsDirective } from '../../../../shared/directives.directive';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'ngtwapl-product-list',
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
  @ContentChild(DetailsDirective)
  public detailsDirective: DetailsDirective;
  @Input()
  public products: any[];

  @ViewChildren(forwardRef(() => TileComponent))
  public tiles: QueryList<TileComponent>;
  @ViewChild("tileContainer")
  public tileContainer: ElementRef;

  @ViewChild("defaultDetailsTemplate")
  public defaultDetailsTemplate: TemplateRef<any>;

  private detailsViewRef: ViewContainerRef;
  private selectedTile: TileComponent
  constructor() { }

  public ngOnInit(): void {
  }

  public openDetails(tile: TileComponent): void {
    this.closeDetails();
    const elem = tile.elementRef.nativeElement as HTMLElement;
    const productTiles = this.tiles.toArray();
    const idxOfElem = productTiles.indexOf(tile);
    if (elem && idxOfElem > -1) {
      const amountOfItemsPerRow: number = Math.round(this.tileContainer.nativeElement.offsetWidth / elem.offsetWidth);
      const rowOfItem = Math.ceil((idxOfElem + 1) / amountOfItemsPerRow);
      const lastItemOfRowIdx = rowOfItem * amountOfItemsPerRow - 1;
      const viewContainerIdx = lastItemOfRowIdx > productTiles.length - 1 ? productTiles.length - 1 : lastItemOfRowIdx;
      this.detailsViewRef = productTiles[viewContainerIdx].viewContainerRef;
      this.detailsViewRef.createEmbeddedView(this.detailsDirective ? this.detailsDirective.templateRef : this.defaultDetailsTemplate, { $implicit: tile.product, data: tile.data }); 
      this.selectedTile = tile;
    }
  }

  public closeDetails(): void {
    if(this.detailsViewRef){
      this.detailsViewRef.detach();
    }
  }

}
