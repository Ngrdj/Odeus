import { CdkDrag, DragDrop } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, Input, OnChanges, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[controlPanel]'
})
export class ControlPanelDirective implements OnChanges {

  @Input('panelTitle')
  panelTitle: string;

  @Input('display')
  panelDisplay: string;

  @Input('resizable')
  resizable: boolean;


  @Output()
  closePanel:EventEmitter<any>=new EventEmitter();

 private elementStyle;
 private mouseIn:boolean;

 private panel;
 private headerBar;
 private deleteButton;
 private titleElement;


  constructor(
    
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private dragDrop:DragDrop

  ) { 

      this.elementStyle = elementRef.nativeElement.style
      this.createPanel()
     // this.setStyle()
      this.setPanelStyle()

    }
    ngOnChanges(changes){
      if(this.panelTitle && changes.panelTitle){

          this.createTitle()
          this.renderer.appendChild(this.headerBar,this.titleElement);

        
      }
      if(this.panelDisplay){

        this.panel.style.display = this.panelDisplay;

      }
      if(this.resizable){this.panel.style.resize = "both";}

    }
    private setStyle(){

      this.elementStyle.position = "absolute";
      this.elementStyle.backgroundColor = "rgba(0,0,0,0.8)";
      this.elementStyle.maxWidth = "50vw";
      this.elementStyle.maxHeight = "80vh";
      this.elementStyle.color = "white";
      this.elementStyle.overflow = "hidden";
      this.elementStyle.border = "rgba(255,255,255,0.3) solid";
      this.elementStyle.borderRadius = "10px 0px 10px 10px";
      this.elementStyle.boxShadow = "black 0px 8px 10px";
      this.elementStyle.display = "flex";
      this.elementStyle.flexDirection = "column";
      
      this.renderer.listen(this.document,'click',()=>{
        if(!this.mouseIn){

          this.elementStyle.zIndex = "1";

        }   
      })

    }
    private setPanelStyle(){

      this.panel.style.position = "absolute";
      this.panel.style.backgroundColor = "rgba(0,0,0,0.8)";
      this.panel.style.maxWidth = "50vw";
      this.panel.style.maxHeight = "80vh";
      this.panel.style.color = "white";
      this.panel.style.overflow = "hidden";
      this.panel.style.border = "rgba(255,255,255,0.3) solid";
      this.panel.style.borderRadius = "10px 0px 10px 10px";
      this.panel.style.boxShadow = "black 0px 8px 10px";
      this.panel.style.display = "flex";
      this.panel.style.flexDirection = "column";
      

    }

    private createHeader(){

      this.createDeleteButton()

      this.headerBar = this.renderer.createElement("div");

      this.renderer.appendChild(this.headerBar,this.deleteButton);
      this.renderer.appendChild(this.panel, this.headerBar);

      this.headerBar.style.backgroundColor="rgba(255,255,255,0.3)";
      this.headerBar.style.padding="2px";
      this.headerBar.style.borderRadius = "7px 0px 0px 0px";
      this.headerBar.style.display = "flex";
      this.headerBar.style.flexDirection = "row-reverse";

      this.renderer.listen(this.deleteButton,"click",() => {

        this.closePanel.emit()
      
      })

      this.renderer.listen(this.headerBar,"mouseover",() => {

        this.headerBar.style.cursor = "grab";
        this.mouseIn = true;
      
      })
      this.renderer.listen(this.headerBar,"mouseout",() => {

        this.mouseIn = false;
      
      })
      this.renderer.listen(this.headerBar,"mouseup",() => {

        this.headerBar.style.cursor = "grab";
      
      })
      this.renderer.listen(this.headerBar,"mousedown",() => {

        this.headerBar.style.cursor = "grabbing";
        this.elementStyle.zIndex = "2"
      
      })

    }

    private createPanel(){

      this.panel = this.renderer.createElement("div");
      const parentNode = this.renderer.parentNode(this.elementRef.nativeElement);

      this.createHeader()

      this.renderer.appendChild(parentNode,this.panel);
      this.renderer.appendChild(this.panel,this.elementRef.nativeElement);

      const dragPanel = this.dragDrop.createDrag(this.panel)
      dragPanel.withHandles([this.headerBar])
      dragPanel.withBoundaryElement(parentNode)
      

    }

    private createDeleteButton(){

      this.deleteButton = this.renderer.createElement("button");

      this.deleteButton.textContent="X";
      this.deleteButton.style.background="none";
      this.deleteButton.style.border="none";
      this.deleteButton.style.cursor="pointer";
      this.deleteButton.style.marginLeft="auto";
      this.deleteButton.style.display="block";

    }

    private createTitle(){

      this.titleElement = this.renderer.createElement("h3");
      this.titleElement.textContent = this.panelTitle;
      this.titleElement.style.margin = "0px";
      this.titleElement.style.fontSize = "1em";
    }


}
