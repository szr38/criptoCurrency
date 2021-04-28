import { Component, OnInit } from '@angular/core';
import { CriptoAService } from '../services/cripto-a.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  opened: boolean=true;

  showFiller = false;

  constructor(private service: CriptoAService) {
   }

  ngOnInit(): void {
    this.service.subjectA$.subscribe();
  }

  receiveMessage($event) {
    this.opened = $event
  }

}
