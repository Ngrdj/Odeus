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
  filterPicturesList:Picture[]=[];
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
    this.openCreateCategoryDialog([],"")
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
        this.setFilterPictureList(datas[0].categories[0]);
        this.categories.push(datas[0].categories[0])

      }

    })

  
  }

  setFilterPictureList(category:string){
    
    this.selectedCategory=category;
    this.filterPicturesList = this.picturesList.filter((picture)=>picture.categories.includes(category))
    console.log('coucou',this.filterPicturesList)
  }

  modifyCategoryClick(picturesList:Picture[],category:string){

    this.openCreateCategoryDialog(picturesList,category)

  }

  deleteCategoryClick(picturesList:Picture[],category:string){
    
  }

}
