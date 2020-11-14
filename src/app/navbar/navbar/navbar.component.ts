import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoggedInUser } from '../../interface/user'
import { UserService } from '../../services/user.service'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private user : LoggedInUser;
  constructor(private userService : UserService, private authService : AuthService) { }

  ngOnInit(): void {
  }

  

}
