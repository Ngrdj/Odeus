import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryDialog } from 'src/app/dialogs/create-category.dialog/create-category.dialog/create-category.dialog.component';
import { Picture } from 'src/app/models/picture';


@Component({
  selector: 'background-panel',
  templateUrl: './background-panel.component.html',
  styleUrls: ['./background-panel.component.scss']
})
export class BackgroundPanelComponent implements OnInit {


  picturesList:Picture[]=[];
  selectedBackground:string;
  categories:string[]=[];
  public selectedCategory:string;

  @Output() changeBackground:EventEmitter<string>=new EventEmitter()

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onBackgroundClick(backgroundUrl:string){

    this.selectedBackground = backgroundUrl

  }
  onChangeBackgroundClick(){

    if(this.selectedBackground){

      this.changeBackground.emit(this.selectedBackground)

    }

  }


  onAddCategoryClick(){
    this.openCreateCategoryDialog(this.picturesList,this.selectedCategory)
  }

  openCreateCategoryDialog(picturesList:Picture[],category:string){

    console.log('avant dialogue',picturesList)

    const dialogRef = this.dialog.open(CreateCategoryDialog, {
      width: '250px',
      panelClass:'panelDialog',
      data:{
            picturesList,
            category:category
          }
    })
    .afterClosed()
    .subscribe((datas:Picture[]) =>{

      if(datas){

        datas.forEach((data)=>{ 
          this.picturesList.push(data);
        })
        this.categories.push(datas[0].categories[0])

      }

    })

  
  }

  getPictureListFilter(){
    return this.picturesList.filter((picture)=>picture.categories.some(category=>category===this.selectedCategory))
  }

  modifyCategoryClick(picturesList:Picture[],category:string){

    this.openCreateCategoryDialog(picturesList,category)

  }

  deleteCategoryClick(picturesList:Picture[],category:string){
    
  }

}
