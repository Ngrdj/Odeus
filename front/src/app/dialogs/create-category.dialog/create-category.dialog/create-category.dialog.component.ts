import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Picture } from 'src/app/models/picture';

export interface DialogDataBackground {
  picturesList:Picture[];
  category:string;
}
@Component({
  selector: 'createCategoryDialog',
  templateUrl: './create-category.dialog.component.html',
  styleUrls: ['./create-category.dialog.component.scss']
})
export class CreateCategoryDialog implements OnInit {
  public picturesList:Picture[]=[];
  public selectedCategory:string;
  constructor(public dialogRef: MatDialogRef<CreateCategoryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataBackground) {

      if(data){
        this.picturesList=data.picturesList;
        this.selectedCategory=data.category;
      }
     }

  ngOnInit(): void {
  }

  addCategoryClick(){
    console.log('add',this.picturesList);
    this.dialogRef.close(this.picturesList);
    this.picturesList=[]
  }

  private getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  getPicture(file:FileList,category:string){
    
      this.getBase64(file).then(

        data => { this.picturesList.push(new Picture(data.toString(),[category]));}
        
      )
    
    
  }

  deletePictureClick(background:Picture){
    this.picturesList=this.picturesList.filter((picture)=>picture!==background)
  }
}
