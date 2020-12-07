import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert.dialog.html',
  styleUrls: ['./alert.dialog.scss']
})
export class AlertDialog implements OnInit {

  message:string=""

  constructor(
    public dialogRef: MatDialogRef<AlertDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string) {

      this.message = data

    }

  ngOnInit(): void {


  }

  onClickOk(displayNextTime:boolean){


    this.dialogRef.close(displayNextTime)    

  }

}
