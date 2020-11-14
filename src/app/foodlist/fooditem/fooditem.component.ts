import { Component, OnInit, Input } from '@angular/core';
import { Food } from'../../interface/food'
import { Router } from '@angular/router';
import { FoodService } from '../../services/food.service'

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent implements OnInit {

  @Input() foodList : Food[];
  @Input() types;
  filterList = ["flour", "vegetables", "peas", "beef", "chevron", "tomatoes", "kidney", 'eggs', 'meat balls', 'hotdog', 'fish', 'chips'];
  constructor(private foodService : FoodService, private router : Router) { }

  ngOnInit(): void {
  }

  goToFood(food : Food, event){
  	event.preventDefault();
    this.router.navigate([`food/:${food.id}`])
  }
}
