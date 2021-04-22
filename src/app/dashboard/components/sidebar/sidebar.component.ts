import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  buttons:sideBar[]=[
    {    icon:'account_balance_wallet',    link:'wallet',    text:'Wallet'  },
    {    icon:'paid',                      link:'moneyA',    text:'CriptoA'  },
]
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  test(test:string){
    console.log(test)
  }

}

interface sideBar{
  icon:string;
  link:string;
  text:string;
}