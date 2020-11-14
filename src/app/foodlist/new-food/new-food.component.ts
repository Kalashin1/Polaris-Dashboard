import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Food } from '../../interface/food';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {

  constructor(private foodService : FoodService) { }

 public newFood : Food[];
 

	title = "New Foods"

  ngOnInit(): void {
  	this.foodService.fetchNewFoods().then((data)=>{
  		this.newFood = data;
  	}).catch(err => {
  		console.log(err)
  		
  	})

  	
  }

  customOptions : OwlOptions = {
  	autoplay : true,
    loop: true,
    mouseDrag : true,
    touchDrag : true,
    pullDrag : true,
    margin: 10,
    autoplayHoverPause: true,
    autoplayTimeout : 6000,
    items : 1
  }

  getFood(data){
  	this.newFood = data
  }

// seperates expensive foods
  getExpensiveFoods(foods, expensiveFoodArray, cheapFoodArray, sortedFoodArray){
  	foods.forEach(food => {
  		if(food.price > 100){
  			expensiveFoodArray.push(food)
  		}
  		else{
  			cheapFoodArray.push(food)
  			
  		}
  	})
  	sortedFoodArray.push(expensiveFoodArray, cheapFoodArray)
  }

}
