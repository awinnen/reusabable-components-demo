import { Component, OnInit } from '@angular/core';
import { beverages } from '../../shared/testdata';

@Component({
  selector: 'app-ng-template-with-default-template',
  templateUrl: './ng-template-with-default-template.component.html',
  styleUrls: ['./ng-template-with-default-template.component.scss']
})
export class NgTemplateWithDefaultTemplateComponent implements OnInit {

  public beverages = beverages;
  constructor() { }

  ngOnInit() {
  }

}
