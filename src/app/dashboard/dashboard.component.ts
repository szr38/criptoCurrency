import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  opened: boolean=false;

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
