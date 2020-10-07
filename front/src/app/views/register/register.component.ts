import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder,) { }

  ngOnInit(): void {

    this.generateForm()

  }
  onRegisterClickButton(){

    if(this.userForm.valid){

      alert("form Ok")

    }else{

      alert("form Ko")

    }

  }

  private generateForm(){

    this.userForm = this.formBuilder.group({

      name:this.formBuilder.control("",Validators.required),
      firstName:this.formBuilder.control(""),
      email:this.formBuilder.control("",Validators.required),
      login:this.formBuilder.control("",Validators.required),
      password:this.formBuilder.control("",Validators.required),
      checkPassword:this.formBuilder.control("",Validators.required)

    })

  }
}
