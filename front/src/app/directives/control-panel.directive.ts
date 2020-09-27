import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[controlPanel]'
})
export class ControlPanelDirective {

 private view;
 private elementStyle;


  constructor(
    
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { 

      this.setStyle()

    }

    setStyle(){

      let deleteButton = this.renderer.createElement("button")
      deleteButton.textContent="X"
      this.renderer.appendChild(this.elementRef.nativeElement, deleteButton);
        
    }

}
