import { Component, OnInit } from '@angular/core';
import { Food } from '../../interface/food'

@Component({
  selector: 'app-dayfood',
  templateUrl: './dayfood.component.html',
  styleUrls: ['./dayfood.component.css']
})
export class DayfoodComponent implements OnInit {
  public foodOfTheDay : Food[];
  public title = 'Food Of The Day'
  constructor() { }

  ngOnInit(): void {

  	this.foodOfTheDay  = [{
  		name : 'English Breakfast',
  		id : 124,
      price : 140,
      ingredients : ['vegetables', 'hot-dog', 'eggs', 'beans'],
      type : 'Food',
      description : 'Lorem Ipsum dolor sit amet consecter',
  		image : '../../../assets/images/foods/english-breakfast/0069685a38008fcc695377c331dc0223.jpg'
  	},
  	{
  		name : 'Kidney Beans',
  		id : 23543059,
      price : 90,
      ingredients : ['kidney', 'beans'],
      type : 'Food',
      description : 'Lorem Ipsum dolor sit amet consecter',
  		image : '../../../assets/images/foods/kidney-beans/c6357c9c494881be19b8ce24eaba16cc.jpg'
  	}
  	]
  }

}
