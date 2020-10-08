import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthentificationsService } from 'src/app/services/authentifications.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private usersService:UsersService,
    private authService:AuthentificationsService,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.generateForm()

  }
  onRegisterClickButton(){

    if(this.userForm.valid){

      alert("form Ok")
      this.usersService.createUser(
        new User(
          this.userForm.controls.name.value,
          this.userForm.controls.login.value,
          this.userForm.controls.password.value,
          this.userForm.controls.email.value
        )).subscribe((user)=>{
          
          this.authService.loginUser(this.userForm.controls.login.value,this.userForm.controls.password.value).subscribe(token =>{

            this.router.parseUrl('');

          })

        });

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
