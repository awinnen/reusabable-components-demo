import { Component, OnInit } from '@angular/core';
import { beverages } from 'src/app/shared/testdata';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {

  public beverages = beverages;
  constructor() { }

  ngOnInit() {
  }

}
