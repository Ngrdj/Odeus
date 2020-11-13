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
    this.openCreateCategoryDialog([],"").subscribe((datas:Picture[]) =>{
      if(datas){
        
        datas.forEach((data)=>{ 
          this.picturesList.push(data);

        })
        this.setFilterPictureList(datas[0].categories[0]);
        this.categories.push(datas[0].categories[0]);
        console.log("coucou")
      }
    })
  }

  openCreateCategoryDialog(picturesList:Picture[],category:string){

    console.log('avant dialogue',picturesList)

   return this.dialog.open(CreateCategoryDialog, {
      width: '250px',
      panelClass:'panelDialog',
      data:{
            picturesList,
            category:category
          }
    })
    .afterClosed()
    
    

  
  }

  setFilterPictureList(category:string){
    
    this.selectedCategory=category;
    this.filterPicturesList = this.picturesList.filter((picture)=>picture.categories.includes(category))
  }

  modifyCategoryClick(picturesList:Picture[],category:string){

    this.openCreateCategoryDialog(picturesList,category).subscribe((datas: Picture[])=>{
      console.log("data",datas)
      this.picturesList=this.picturesList.filter((picture)=>{

        return !picture.categories.includes(datas[0].categories[0])

      });
      console.log("this.picturesList",this.picturesList)
      this.categories[this.categories.indexOf(category)]=datas[0].categories[0];

      if(datas[0].categories[0]!==this.categories[this.categories.indexOf(datas[0].categories[0])]){

        this.categories.push(this.selectedCategory)

      }
      
      datas.forEach((data)=>{

        this.picturesList.push(data)

      })
      this.setFilterPictureList(datas[0].categories[0]);

    })
  }

  deleteCategoryClick(picturesList:Picture[],categorySelected:string){
    this.picturesList=this.picturesList.filter((picture)=>!picture.categories.includes(categorySelected));
    this.categories.splice(this.categories.indexOf(categorySelected),1)
    this.setFilterPictureList(this.categories[0])
  }

}
