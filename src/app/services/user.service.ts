import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/'
import { User } from '../interface/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user

  private Options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),

  }
  constructor( private http: HttpClient) { }

  // signing up a user
  signupUser(user: User):Observable<any>{
    return this.http.post('http://localhost:4000/signup-user', user, this.Options)
  }

  // loging in a user
  loginUser(user: {email : string, password : string}):Observable<any>{
    return this.http.post('http://localhost:4000/login-user', user, this.Options)
  }

  // logging out a user
  logoutUser():Observable<any>{
    return this.http.get('http://localhost:4000/logout-user')
  }



}
