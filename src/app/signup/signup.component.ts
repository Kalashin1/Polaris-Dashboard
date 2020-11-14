import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user:User;
  constructor(public userService : UserService) { }

  ngOnInit(): void {
    this.user ={ firstName : '', lastName : '', email : '', password : '', id : ''}
  }

  signUpUser(user: User){
    this.userService.signupUser(user).subscribe( user =>{
      console.log(user)
    })
  }

}
