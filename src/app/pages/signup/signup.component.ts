import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';
import { NavigationService } from '../../services/navigation.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public error = {
    code: '',
    message: ''
  }

  constructor(private authService: AuthService, private navigator: NavigationService) { }
  public user: User  = {
      name: '',
      password: '',
      email: ''
    }
  ngOnInit(): void {
    this.resetUser()
  }

  resetUser(){
  	this.user = {
      name: '',
      password: '',
      email: ''
    }
  }

  createUser(user: User, event){
    event.target['submit'].textContent = 'loading'
    this.authService.createUser(user).subscribe(user =>{
      if(user.id){
         event.target['submit'].textContent = 'Login'
        this.navigator.goToDashboard(['dashboard', user.id])
      }
      else if(user.code && user.message){
       event.target['submit'].textContent = 'Login'
        this.error.code = user.code,
        this.error.message = user.message
      }
    }
    )
  }
}
