import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kala-food';

  transactions = [{
    type: 'payments',
    items: [{type: 'all payments', amount: 100}, {type: 'reconciled payments', amount: 80},
    {type: 'un-reconciled payments', amount: 20}, {type: 'manual settlement'}]
  },
  {
    type: 'orders',
    items: [{type: 'all orders', amount: 100}, {type: 'pending orders', amount: 20}, {type: 'reconciled orders', amount: 80}]
  }]
}
