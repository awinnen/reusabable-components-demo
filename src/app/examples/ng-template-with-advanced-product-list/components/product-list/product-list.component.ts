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
  public contentDirective: TemplateRef<any>;
  @ContentChild(TileHeaderDirective)
  public headerDirective: TemplateRef<any>;
  @ContentChild(TileActionsDirective)
  public actionsDirective: TemplateRef<any>;
  @ContentChild(TileOverlayDirective)
  public overlayDirective: TemplateRef<any>;
  @ContentChild(DetailsDirective)
  public detailsDirective: TemplateRef<any>;
  @Input()
  public products: any[];

  @ViewChildren(forwardRef(() => TileComponent))
  public tiles: QueryList<TileComponent>;
  @ViewChild("tileContainer")
  public tileContainer: ElementRef;

  @ViewChild("defaultDetailsTempplate")
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
      this.detailsViewRef.createEmbeddedView(this.detailsDirective || this.defaultDetailsTemplate, { $implicit: tile.product }); 
      this.selectedTile = tile;
    }
  }

  public closeDetails(): void {
    if(this.detailsViewRef){
      this.detailsViewRef.detach();
    }
  }

}
