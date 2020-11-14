import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../interface/food'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	cartList : Food[];
  constructor(private foodService : FoodService) { }

  ngOnInit(): void {
  	this.foodService.fetchCartFoods().subscribe((data) => {
  		this.cartList = data
  		console.log(data)
  	},
  	(err) => {
  		console.log(err)
  	})

	}

}
