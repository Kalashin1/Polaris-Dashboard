import { Component, OnInit, DoCheck } from '@angular/core';
import { Food } from '../interface/food';
import { FoodService } from '../services/food.service'
import { Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit{
	food: Food
	foods = []
	id
  constructor(private foodService : FoodService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  	this.id = this.activatedRoute.snapshot.paramMap.get('id');
  	this.foodService.fetchFoods().then(foods =>{
  		console.log(this.id)
  		this.foods = foods
  		this.food = foods[1];
  		console.log(this.food)
  	})

  }


  
  
}
