import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { NavigationService } from '../../services/navigation.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private auth: AuthService, private navigator: NavigationService) { }
  public user
  showChannel : boolean = false
  ngOnInit(): void {
  }

  fetchUser(){
    this.auth.fetchUserWithId().subscribe(val => {
      this.user = val
      this.showChannel = true
    })
  }

  goToDashboard(location){
    this.navigator.goToDashboard(location)
  }

}
