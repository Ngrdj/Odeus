import { Component, createPlatformFactory, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

userForm:FormGroup

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.createForm()

  }

  onLoginClick(){

    if(this.userForm.valid){

      console.log("formulaire valide")

    }else{

      console.log("formulaire invalide")

    }

  }
  createForm(){

    this.userForm = this.formBuilder.group({

      login:this.formBuilder.control("",Validators.required),
      password:this.formBuilder.control("",Validators.required)

    })

  }
}
