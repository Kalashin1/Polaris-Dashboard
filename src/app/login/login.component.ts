import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: { email : string, password : string};


  constructor(public userService : UserService, private authService : AuthService, private router : Router) {
    this.user = {email : '', password : ''}
  }
  ngOnInit(): void {
  }

  loginUser(user){
    this.userService.loginUser(user).subscribe( report =>{
      this.authService.fetchUser().subscribe(user  => {
        console.log(user);
        this.router.navigate(['dashboard']);
        let loginBtn = document.querySelectorAll('.login');
        for(var i = 0; i < loginBtn.length; i ++)
        {
          loginBtn[i].setAttribute('style', 'display:none');
        };
      })
    })
  }

}
