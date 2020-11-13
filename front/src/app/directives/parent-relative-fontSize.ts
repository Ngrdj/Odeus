import { DOCUMENT } from '@angular/common';
import {  Directive, ElementRef, Inject,  Input, OnChanges,  Renderer2, } from '@angular/core';


@Directive({
  selector: '[parentRelativeFontSize]',
})
export class ParentRelativeFontSizeDirective implements OnChanges {


@Input('ratio')
@Input('parentRelativeFontSize')
ratio:number

@Input('maxSize')
maxSize:number

@Input('minSize')
minSize:number

@Input('noWrap')
noWrap:boolean

@Input('parent')
private parent:string | Element;

private element;
private elementStyle;


  constructor(
    private elementRef:ElementRef,
    private renderer:Renderer2,
    @Inject(DOCUMENT)private document: Document,
  ) {

    this.element = elementRef.nativeElement;
    this.elementStyle = this.element.style;
    this.parent = renderer.parentNode(this.element);


  }


  ngOnChanges(changes){


    if(changes.parent && (typeof this.parent === 'string' || this.parent instanceof String)){

        this.parent = this.document.querySelector(this.parent as string)

    }
    if(changes.noWrap){

      this.elementStyle.textOverflow = "nowrap"
      console.log( this.elementStyle.textOverflow)

    }

  }


  setStyle(){
    


  if(!(typeof this.parent === 'string' || this.parent instanceof String)){

    const parentWidth = this.parent.clientWidth;
    const parentHeight = this.parent.clientHeight;

   if(this.ratio){
     



    if((this.elementStyle.fontSize.replace('px','') * this.element.textContent.length) > parentWidth ){

      this.elementStyle.fontSize = parentWidth/this.element.textContent.length + "px"

    }else{

      this.elementStyle.fontSize = Math.floor((parentHeight*this.ratio)/100) + "px";

    }

    if(this.elementStyle.fontSize >= this.maxSize){this.elementStyle.fontSize = this.maxSize}
    if(this.elementStyle.fontSize <= this.minSize){this.elementStyle.fontSize = this.minSize}
  }

  }

  }

}
