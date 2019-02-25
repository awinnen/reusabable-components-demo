import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tileHeader]'
})
export class TileHeaderDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({
  selector: '[tile]'
})
export class TileDirective {
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