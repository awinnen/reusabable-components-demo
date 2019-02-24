import { Component, OnInit } from '@angular/core';
import { beverages } from 'src/app/shared/testdata';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  public beverages = beverages;
  constructor() { }

  ngOnInit() {
  }

}
