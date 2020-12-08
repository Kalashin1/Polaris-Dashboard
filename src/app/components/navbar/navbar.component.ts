import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service'

import { NavigationService } from '../../services/navigation.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private navigator: NavigationService) { }
  public user
  ngOnInit(): void {

  }

  

  fetchUser(){
    this.auth.fetchUserWithId().subscribe(val => {
      this.user = val
    })
  }

  goToDashboard(location){
    this.navigator.goToDashboard(location)
  }

}
