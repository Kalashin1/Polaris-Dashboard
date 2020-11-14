import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { share } from 'rxjs/operators';
import { LoggedInUser} from '../interface/user'

@Injectable({
  providedIn: 'root'
})



export class AuthService {

  private Options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    observe : 'body'
  }

  constructor(private http: HttpClient, private router : Router) {

   }

   fetchUser():Observable<LoggedInUser>{
    return this.http.get<LoggedInUser>('http://localhost:4000/user', {observe : 'body'}).pipe(
    map(val => val),
    share())
  }


  canActivate (user){
   if(user){
     console.log(user)
     return true
   }
   this.router.navigate(['login'])
  return false
  }

}
