import { Component, OnInit } from '@angular/core';
import { beverages } from '../../shared/testdata';

@Component({
  selector: 'ng-template-with-advanced-product-list.component',
  templateUrl: './ng-template-with-advanced-product-list.component.html',
  styleUrls: ['./ng-template-with-advanced-product-list.component.scss']
})
export class NgTemplateWithAdvancedProductListComponent implements OnInit {

  public beverages = beverages;
  public contracts = [
    { name: "3G 21MBit/s", speed: 21, price: 9, contractPeriod: 1 },
    { name: "4G 50MBit/s", speed: 50, price: 19, contractPeriod: 12 },
    { name: "4G 200MBit/s", speed: 200, price: 29, contractPeriod: 24 },
    { name: "4G 500MBit/s", speed: 500, price: 49, contractPeriod: 24 },
    { name: "5G 1000MBit/s", speed: 1000, price: 129, contractPeriod: 24 }
  ];

  public data: any = {};
  constructor() { }

  ngOnInit() {
  }

  public showAlert(data: any): void {
    alert("Ok, we'll mail you the order details\n" + JSON.stringify(data, null, 4))
  }

}
