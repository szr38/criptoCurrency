import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.sass']
})
export class HeaderDashboardComponent implements OnInit {

  @Output () openSidebar = new EventEmitter<boolean>();

  sidebar=true;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSidebar(){
    this.sidebar=!this.sidebar;
    this.openSidebar.emit(this.sidebar)
  }

}
