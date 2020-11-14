import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router'
import { Food } from '../../interface/food'
import { FoodService } from '../../services/food.service'

@Component({
  selector: 'app-discount-food',
  templateUrl: './discount-food.component.html',
  styleUrls: ['./discount-food.component.css']
})
export class DiscountFoodComponent implements OnInit {
  title="Foods on discount"
  public foods : Food[]
  constructor(private foodService : FoodService, private router : Router) { }

  ngOnInit(): void {
    this.foodService.fetchDiscountFoods().then( data => {
      console.log(data)
      this.foods = data
    })
  }

  goToFood(food : Food, event){
    event.preventDefault();
    this.router.navigate([`food/:${food.id}`])
  }


  customOptions : OwlOptions = {
    autoplay : true,
    loop: true,
    mouseDrag : true,
    touchDrag : true,
    pullDrag : true,
    autoplayHoverPause: true,
    autoplayTimeout : 6000,
    margin : 4,
    responsive : {
      0 : {
        items : 2
      },
      600 : {
        items : 3
      },
      1000 : {
        items : 4
      }
    },
    nav : false,
    dots: false
  }

}
