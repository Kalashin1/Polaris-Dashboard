import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { Food } from '../interface/food';
import { Router } from '@angular/router'
import { FoodService } from '../services/food.service'

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  foods : Food[];
  foodType = ["meal", 'snacks'];
  ingredientFilter = ["flour", "vegetables", "peas", "beef", "chevron", "tomatoes", "kidney", 'eggs', 'meat balls', 'hotdog', 'fish', 'chips'];
  constructor(private foodService : FoodService, private router : Router) { }

  ngOnInit(): void {
  	this.getAllFoods()
  }

  getAllFoods(){
  	this.foodService.fetchFoods().then(data => {
  		this.foods = data.slice(0, 11);
  	}).catch(err => {
  		console.error(err)
  	})
  }

  

}
