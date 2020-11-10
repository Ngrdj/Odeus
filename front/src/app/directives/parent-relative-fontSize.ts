import { DOCUMENT } from '@angular/common';
import {  AfterViewChecked,   Directive, ElementRef, Inject, Input,  OnChanges,  Renderer2,  } from '@angular/core';

@Directive({
  selector: '[parentRelativeFontSize]'
})
export class ParentRelativeFontSizeDirective implements AfterViewChecked,OnChanges {

@Input('ratio')
@Input('parentRelativeFontSize')
ratio:number

@Input('parent')
private parent:string | Element;

private element;
private elementStyle;


  constructor(private elementRef:ElementRef,private renderer:Renderer2, @Inject(DOCUMENT) private document: Document,
  ) {

    this.element = elementRef.nativeElement;
    this.elementStyle = this.element.style;
    this.parent = renderer.parentNode(this.element);

  }

  ngAfterViewChecked(){

      this.setStyle()

  }
  ngOnChanges(changes){

    if(changes.parent && (typeof this.parent === 'string' || this.parent instanceof String)){

        this.parent = this.document.querySelector(this.parent as string)

    }

  }


  setStyle(){
    
  if(!(typeof this.parent === 'string' || this.parent instanceof String)){

    const parentWidth = this.parent.clientWidth;
    const parentHeight = this.parent.clientHeight;

   if(this.ratio){ this.elementStyle.fontSize = (parentHeight*this.ratio)/100 + "px";}

  }

  }

}
