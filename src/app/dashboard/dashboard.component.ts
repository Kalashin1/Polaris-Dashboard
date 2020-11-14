import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from '../interface/user';
import { UserService } from '../services/user.service'
import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user : LoggedInUser
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.fetchUser().subscribe( user => {
      this.user = user
    }, err => {
      console.log(err)
    })
  }




}
