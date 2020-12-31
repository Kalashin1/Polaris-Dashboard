import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: ['./payment-item.component.css']
})
export class PaymentItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.productItem)
  }

  @Input()productItem

}
