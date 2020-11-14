import { Injectable } from '@angular/core';
import { Chef } from '../interface/chef';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChefService {


  constructor(private http : HttpClient) { }

  getChefs():Observable<Chef[]>{
  	return this.http.get<Chef[]>('assets/json/chefs.json').pipe(
      map(obj => obj)
      )
  }


}
