import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  goTo(location: string){
  	this.router.navigate([location])
  }

  goToDashboard(arr: any){
  	this.router.navigate(arr)
  }
}
