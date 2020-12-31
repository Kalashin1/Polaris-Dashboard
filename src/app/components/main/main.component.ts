import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()transactions
  public transactData = [
    {title : 'daily transaction volume', numbers: 234},
    {title : 'daily transaction value', numbers: 4000000},
    {title: 'total transaction volume', numbers : 452000},
    {title: 'total transaction value', numbers: 4000000}
  ]

}
