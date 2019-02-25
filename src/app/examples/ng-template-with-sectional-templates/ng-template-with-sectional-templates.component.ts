import { Component, OnInit } from '@angular/core';
import { beverages } from '../../shared/testdata';

@Component({
  selector: 'app-ng-template-with-sectional-templates',
  templateUrl: './ng-template-with-sectional-templates.component.html',
  styleUrls: ['./ng-template-with-sectional-templates.component.scss']
})
export class NgTemplateWithSectionalTemplatesComponent implements OnInit {

  public beverages = beverages;
  constructor() { }

  ngOnInit() {
  }

}
