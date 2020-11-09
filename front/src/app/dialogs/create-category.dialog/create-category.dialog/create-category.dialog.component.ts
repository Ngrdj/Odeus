import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'createCategoryDialog',
  templateUrl: './create-category.dialog.component.html',
  styleUrls: ['./create-category.dialog.component.scss']
})
export class CreateCategoryDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateCategoryDialog>) { }

  ngOnInit(): void {
  }

  addCategoryClick(category:string){
    this.dialogRef.close(category)
  }
}
