import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ControlPanel]'
})
export class ControlPanelDirective {

private element;
private elementStyle;

  constructor(private elementRef:ElementRef) {

    this.element = elementRef.nativeElement;
    this.elementStyle = this.element.style;

    this.setStyle()

   }

   private setStyle(){

    this.elementStyle.backgroundColor="rgba(0,0,0,0.8)"
    console.log(this.element)

   }

}
