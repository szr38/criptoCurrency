import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CriptoAService } from 'src/app/services/cripto-a.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.sass']
})
export class GraphicComponent implements OnInit {

  @Input() chartData: number[];

  public lineChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [], label: 'Series A' },

  ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLabels: Label[] = ['', '', '', '', '', '', '', '', '', ''];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private service: CriptoAService) {
    this.service.subjectB$.subscribe(resp => {
      this.lineChartData[0].data.push(resp);     
      if (this.lineChartData[0].data.length >= 11) {
        let chartTime: any = new Date();
        chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
        this.lineChartData[0].data.shift();
        this.lineChartLabels.push(chartTime);
        this.lineChartLabels.shift();
      }
    });
  }

  ngOnInit(): void {

  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   if(changes.chartData.currentValue){
  //     this.lineChartData=[{ data: this.chartData , label: 'Series A'}];
  //     console.log(this.lineChartData, 'cambio');
  //   }
  // }

}
