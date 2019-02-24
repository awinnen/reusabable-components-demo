import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'ngt-tile',
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
