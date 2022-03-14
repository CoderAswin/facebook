import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  
  loginForm = this.fb.group({
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.pattern('[0-9]*'),Validators.required]]
  })


  constructor(private loginData:DatabaseService,private fb:FormBuilder) {
    
   }

  ngOnInit(): void {
  }

  logIn(){
    var email = this.loginForm.value.email
    var password = this.loginForm.value.password
    var database = this.loginData.database
    if(this.loginForm.valid){
      if(email == database[password].email){
        if(password == database[password].password){
          alert("successfully logged In")
        }
      }else{
        alert("invalid username or password")
      }
    }else{
      alert("invalid credentials")
      
    }
    
  }


}
