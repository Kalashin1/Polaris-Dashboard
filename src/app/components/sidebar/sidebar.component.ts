import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  invoiceBtn : string = 'generate invoice'

  listItem = [{
    type: 'payments',
    items: ['all payments', 'reconciled payments', 'un-reconciled payments', 'manual settlement']
  },
  {
    type: 'orders',
    items: ['all orders', 'pending orders', 'reconciled orders']
  }]

  main = 'main'

}
