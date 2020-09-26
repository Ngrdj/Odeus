import { Directive, ElementRef, ɵ_sanitizeStyle } from '@angular/core';

@Directive({
  selector: '[appControlPanel]'
})
export class ControlPanelDirective {

private element;
private elementStyle;

  constructor(elmt:ElementRef) {

    this.element = elmt.nativeElement;
    this.elementStyle = this.element.style;

    this.setStyle()

   }

   private setStyle(){


   }

}
