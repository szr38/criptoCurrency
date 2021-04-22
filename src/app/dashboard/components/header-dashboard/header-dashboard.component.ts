import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { walletClass } from '../../pages/wallet/wallet.model';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.sass']
})
export class HeaderDashboardComponent implements OnInit {

  @Output () openSidebar = new EventEmitter<boolean>();

  sidebar=true;

  walletSubs: Subscription = new Subscription();
  wallet:walletClass[];
  walletTotal:number=0;

  constructor(private store: Store<AppState>,) { }

  ngOnInit(): void {
    this.store.select('wallet').subscribe( wallet =>{
      this.wallet=wallet;
      this.walletTotal=0;
      wallet.forEach(element => {
        this.walletTotal+=element.amount;
      });
    });
  }

  onChangeSidebar(){
    this.sidebar=!this.sidebar;
    this.openSidebar.emit(this.sidebar)
  }

}
