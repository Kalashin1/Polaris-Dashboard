import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.css']
})
export class HomeServicesComponent implements OnInit {

  title = 'Services'
  constructor() { }

  ngOnInit(): void {
  }
  public servicesSvg = [
    { svg : 'fas fa-wine-glass spoon', title : 'Good Food', message : 'He who lives in a glass house shold not throw stones. If you sell eggs don\'t start a fight.'},
    { svg : 'fas fa-beer spoon', title : 'Anytime, Anywhere', message : 'When you carry your own water you realize the value of every drop. Silence is golden.'},
    { svg : 'fas fa-truck spoon', title : 'Fast Deliveries', message : 'Every Afrian should remember that they were african before they became something else.'}
  ]
}
