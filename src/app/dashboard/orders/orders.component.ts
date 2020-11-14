import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoggedInUser } from '../../interface/user'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public user : LoggedInUser;
  public orders
  constructor(private authService : AuthService) { }

  ngOnInit(): void {

    this.authService.fetchUser().subscribe(val => {
      this.user = val;
      this.orders = this.user.orders
    })

  }

}
