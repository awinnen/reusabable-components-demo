import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngtwdt-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input()
  public tileTemplate: TemplateRef<any>;
  @Input()
  public product: any;
  constructor() { }

  ngOnInit() {
  }

}
