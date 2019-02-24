import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'ngt-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ContentChild(TemplateRef)
  public tileTemplate: TemplateRef<any>;
  @Input()
  public products: any[];

  constructor() { }

  ngOnInit() {
  }

}
