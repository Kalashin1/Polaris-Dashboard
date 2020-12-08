import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { ActivatedRoute } from '@angular/router'
import { User } from '../../interface/user'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-join-success',
  templateUrl: './join-success.component.html',
  styleUrls: ['./join-success.component.css']
})
export class JoinSuccessComponent implements OnInit {

  constructor(private navigator: NavigationService, private route: ActivatedRoute, private authService: AuthService) { }

   public userId
   public user

  ngOnInit(): void {
  	this.userId = this.route.snapshot.params.userId;
    this.authService.fetchUserWithId().subscribe(user => {
      this.user = user
    })
  }

  goToDashboard(location: any){
    this.navigator.goToDashboard(location)
  }

}
