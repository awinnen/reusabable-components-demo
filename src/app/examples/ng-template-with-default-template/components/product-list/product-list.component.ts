import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'ngtwdt-product-list',
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
