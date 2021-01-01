import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  title = 'payments'
  show = false;
  public productList
  selectList = ['all', 'reconciled', 'un-reconcilded', 'settled', 'unsettled']
  totalItemList

  ngOnInit(): void {
    this.getTodosList()
  }

  toggleSelect(){
    this.show = !this.show
  }

  getTodosList(){
    this.productService.getTodos().subscribe(val => {
      this.totalItemList = Array.from(val)
      this.productList = this.totalItemList.filter(item => item.id <= 10)

    },
    err => console.log(err))
  }

  newPage(button){
    if(button === 'next'){
      this.productList = this.totalItemList.filter(item => item.id >= 10)
    }
    else if(button === 'prev'){
      this.productList = this.totalItemList.filter(item => item.id <= 10)
    }
  }

}


// [{userId: 1, id: 1, title: 'some title', done: false}, {userId: 2, id: 1, title: 'anither title', done: true}]
