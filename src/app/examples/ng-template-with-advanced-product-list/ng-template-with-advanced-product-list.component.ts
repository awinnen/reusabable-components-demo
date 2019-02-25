import { Component, OnInit } from '@angular/core';
import { beverages } from '../../shared/testdata';

@Component({
  selector: 'ng-template-with-advanced-product-list.component',
  templateUrl: './ng-template-with-advanced-product-list.component.html',
  styleUrls: ['./ng-template-with-advanced-product-list.component.scss']
})
export class NgTemplateWithAdvancedProductListComponent implements OnInit {

  public beverages = beverages;
  constructor() { }

  ngOnInit() {
  }

}
