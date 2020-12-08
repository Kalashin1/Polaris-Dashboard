import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { User} from '../interface/user'
import { Channel } from '../interface/channel'


@Injectable({
  providedIn: 'root'
})



export class AuthService {

  constructor(private http: HttpClient, private router : Router) {

   }

  addChannel(channel: Channel, user: User):Observable<any>{
    let obj = {user : user,  channel : channel}
    return this.http.post('http://localhost:4000/add-channel', obj, {headers: new HttpHeaders({'Content-Type': 'application/json'})})

  }

  createUser(user: User):Observable<any>{
    user.channels = []
    return this.http.post('http://localhost:4000/create-user', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  loginUser(user: User):Observable<any>{
    return this.http.post('http://localhost:4000/login', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  logoutUser():Observable<any>{
    return this.http.get('http://localhost:4000/logout-user')
  }

  fetchUserWithId():Observable<User>{
    return this.http.get<User>('http://localhost:4000/user')
  }

  isUserLoggedIn():Observable<boolean>{
    return this.fetchUserWithId().pipe(map(user => {if(user!== undefined || null) return true}))
  }

  fetchChannels():Observable<Channel[]>{
    return this.http.get<Channel[]>('http://localhost:4000/channels')
  }

}
