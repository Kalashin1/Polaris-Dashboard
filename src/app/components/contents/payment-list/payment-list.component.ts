import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  constructor() { }
  productList = [{userId: 1, id: 1, title: 'some title', done: false}, {userId: 2, id: 1, title: 'anither title', done: true}]
  ngOnInit(): void {
  }
  title = 'payments'
  show = false;

  selectList = ['all', 'reconciled', 'un-reconcilded', 'settled', 'unsettled']

  toggleSelect(){
    this.show = !this.show
  }
}
