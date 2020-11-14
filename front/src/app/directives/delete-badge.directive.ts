import { Directive, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';

export enum DeleteBadgePositionEnum {

  LEFT="Left",
  RIGHT="Right",
  DEFAULT="Default"

}

@Directive({
  selector: '[deleteBadge]'
})
export class DeleteBadgeDirective implements OnChanges {

  @Input('badgePosition')
  @Input('deleteBadge')
  position: DeleteBadgePositionEnum;

  @Input('innerBadge')
  inner: boolean;

  @Input('badgeClass')
  badgeClass:string

  gap = "10px"

  @Output() delete:EventEmitter<any> = new EventEmitter();

  private elementStyle:HTMLElement["style"];

  private deleteButtonElement:HTMLButtonElement;
  private deleteButtonStyle:HTMLElement["style"];


  constructor(private elementRef:ElementRef,private renderer:Renderer2) {

    this.elementStyle = this.elementRef.nativeElement.style;

    this.createDeleteButton()
    this.setStyles()
    this.listenDeleteButton()

  }
  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes.position){

      this.setDeleteButtonPosition()

    }
    if(changes.inner){

      this.gap = "0px"
      this.setDeleteButtonPosition()

    }
    if(changes.badgeClass){

      this.deleteButtonElement.classList.add(this.badgeClass)

    }

  }


  private setStyles() {


    this.setElementStyle()
    this.setDeleteButtonStyle()

  }

  private createDeleteButton(){

    this.deleteButtonElement = this.renderer.createElement("button");
    this.renderer.appendChild(this.elementRef.nativeElement,this.deleteButtonElement);

    this.deleteButtonElement.textContent = "x"


  }
  private setDeleteButtonStyle(){

    this.deleteButtonStyle = this.deleteButtonElement.style;


    this.deleteButtonStyle.position = "absolute";
    this.setDeleteButtonPosition()
    this.deleteButtonStyle.borderRadius = "50% 50% 50% 50%";
    this.deleteButtonStyle.width = "20px";
    this.deleteButtonStyle.height = "20px";
    this.deleteButtonStyle.display = "flex";
    this.deleteButtonStyle.justifyContent = "center";
    this.deleteButtonStyle.padding = "0";

    this.deleteButtonStyle.backgroundColor = "var(--darkerPanelsColor)";
    this.deleteButtonStyle.color = "white";
    this.deleteButtonStyle.cursor = "pointer";
    this.deleteButtonStyle.border = "thin white solid";
    
  }

  private setDeleteButtonPosition(){

    this.deleteButtonStyle.top = "-"+this.gap;

    switch(this.position){

      case DeleteBadgePositionEnum.LEFT:
        this.deleteButtonStyle.left = "-" + this.gap;
        this.deleteButtonStyle.right = "initial";
      break;
      case DeleteBadgePositionEnum.RIGHT || DeleteBadgePositionEnum.DEFAULT:
        this.deleteButtonStyle.left = "initial";
        this.deleteButtonStyle.right = "-"+this.gap;
      break;
      default:
        this.deleteButtonStyle.left = "initial";
        this.deleteButtonStyle.right = "-"+this.gap;
    }

  } 

  private setElementStyle(){

    this.elementStyle.position = "relative"

  }

  private listenDeleteButton(){

    this.renderer.listen(this.deleteButtonElement,"click",(e:MouseEvent) => {

      this.delete.emit()
      e.stopPropagation()
      console.log("del")

    })
    this.renderer.listen(this.deleteButtonElement,"mouseover",(e:MouseEvent) => {

      e.stopPropagation()

    })
    

  }

}
