import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInUser } from '../interface/user'
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  private User$: LoggedInUser;
  constructor(private authService : AuthService){
    this.authService.fetchUser().subscribe(x=> {
      this.User$ = x
    }, err => {
      console.log(err)
    })

  }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.canActivate(this.User$)
    }
  }
