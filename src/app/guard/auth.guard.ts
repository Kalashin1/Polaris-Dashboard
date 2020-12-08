import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public user
  constructor(private auth: AuthService, private router: Router){
    this.auth.fetchUserWithId().subscribe(user => {
      this.user = user
    })
  }
  public id
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(typeof this.user !== 'undefined'){
      return true
    }
    else{
      this.router.navigate(['Login'])
      return false
    }
  }
  
}
