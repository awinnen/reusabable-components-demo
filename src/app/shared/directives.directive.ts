import { Directive, TemplateRef, NgModule } from '@angular/core';

@Directive({
  selector: '[tileHeader]'
})
export class TileHeaderDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({
  selector: '[tileContent]'
})
export class TileContentDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({
  selector: '[tileActions]'
})
export class TileActionsDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({
  selector: '[tileOverlay]'
})
export class TileOverlayDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}

@NgModule({
  declarations: [
    TileActionsDirective,
    TileContentDirective,
    TileHeaderDirective,
    TileOverlayDirective
  ],
  exports: [
    TileActionsDirective,
    TileContentDirective,
    TileHeaderDirective,
    TileOverlayDirective
  ]

})
export class HelperDirectivesModule { }