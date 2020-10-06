import { Component, createPlatformFactory, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthentificationsService } from 'src/app/services/authentifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

userForm:FormGroup

  constructor(
    public formBuilder:FormBuilder,
    private authService:AuthentificationsService,
    private router:Router) {


     }

  ngOnInit(): void {

    this.createForm()
    console.log(sessionStorage)
    
  }

  onLoginClick(){

    if(this.userForm.valid){

      console.log("formulaire valide")
      console.log(this.userForm)

      this.authService.loginUser(this.userForm.controls.login.value,this.userForm.controls.password.value)
      .subscribe(value => {

        window.alert("user ok");
        this.router.navigate([""])


      },error => {

        window.alert(`erreur => ${error.error.message}`)

      })

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
