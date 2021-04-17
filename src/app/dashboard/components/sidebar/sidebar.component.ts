import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  test(test:string){
    console.log(test)
  }

}
