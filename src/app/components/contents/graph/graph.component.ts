import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Today 5th August 2020' },
	  ];
	  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	  public lineChartOptions: (ChartOptions & { annotation: any }) = {
	    responsive: true,
	  };
	  public lineChartColors: Color[] = [
	    {
	      borderColor: 'black',
	      backgroundColor: 'rgba(0,0,225,0.3)',
	    },
	  ];
	  public lineChartLegend = true;
	  public lineChartType = 'line';
	  public lineChartPlugins = [];

  ngOnInit(): void {
  	console.log(this.graph)
  }

  @Input()graph

}
