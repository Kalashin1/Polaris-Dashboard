import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { share, map} from 'rxjs/operators';
import { Food } from '../interface/food'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http : HttpClient) { }


  fetchDiscountFoods(){
    return this.http.get<Food[]>('assets/json/carousel-food.json').toPromise()
  }

  fetchFoods(){
  	return this.http.get<Food[]>('assets/json/food.json').pipe(
      map(food => food),
      share()
      ).toPromise()
  }

  fetchCartFoods(){
    return this.http.get<Food[]>('assets/json/cart-food.json')
  }


  fetchNewFoods(){
  	return this.http.get<Food[]>('assets/json/new-food.json').toPromise()
  }


}
