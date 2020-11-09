import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[formButton]'
})
export class FormButtonDirective {

private element;
private elementStyle;
@HostListener('mouseover') onHover() {
  this.elementStyle.cursor="pointer";
  this.elementStyle.filter="invert(100%)";

}
@HostListener('mouseleave') onLeave() {
  this.elementStyle.filter="";

}

  constructor(private elementRef:ElementRef) {

    this.element = elementRef.nativeElement
    this.elementStyle = this.element.style
    this.setStyle()

  }

  setStyle(){

    this.elementStyle.backgroundColor="white";
    this.elementStyle.padding="10px";
    this.elementStyle.border="thin solid";
    this.elementStyle.minWidth="100px";

  }

}
