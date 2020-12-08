import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from '../../interface/user'
import { AuthService } from '../../services/auth.service'
import { NavigationService } from '../../services/navigation.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private navigator: NavigationService) { }
  public error = {
    code: '',
    message: ''
  }
  public user: LoggedInUser = {
  	email: '',
  	password: ''
  }
  ngOnInit(): void {
  }

  createUser(user: LoggedInUser){
    this.authService.loginUser(user).subscribe(user => {
      if(user.id){
        this.navigator.goToDashboard(['dashboard', user.id])
      }
      else if(user.code && user.message){
        this.error.code = user.code,
        this.error.message = user.message
      }
    })
  }
}
