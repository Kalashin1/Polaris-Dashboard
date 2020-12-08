import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from '../../interface/user'
import { Channel } from '../../interface/channel'
import { AuthService } from '../../services/auth.service'
import { NavigationService } from '../../services/navigation.service'
import { ActivatedRoute, Route } from '@angular/router';
import showLink from '../../interface/show-link'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService : AuthService, private navigator: NavigationService) { }

  public user: LoggedInUser

  public userId;


  ngOnInit(): void {
  	this.userId = this.route.snapshot.params.id
  	console.log(this.userId)
  	this.authService.fetchUserWithId().subscribe(user => {
  		this.user = user
  	})
    showLink.show = false
  }


  logout(){
    this.authService.logoutUser().subscribe(message => {
      console.log(message)
      this.navigator.goTo('Login')
    })
  }

  goToDashboard(location){
    this.navigator.goToDashboard(location)
  }

}
