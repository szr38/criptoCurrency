import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { CriptoAService } from 'src/app/services/cripto-a.service';
import { walletClass } from '../../pages/wallet/wallet.model';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.sass']
})
export class HeaderDashboardComponent implements OnInit, OnDestroy {

  @Output() openSidebar = new EventEmitter<boolean>();

  sidebar = true;

  walletSubs: Subscription = new Subscription();
  wallet: walletClass[];
  walletTotal: number = 0;

  constructor(private store: Store<AppState>, private service: CriptoAService) { }

  ngOnInit(): void {
    this.service.subjectA$;
    this.walletSubs = this.store.select('wallet').subscribe(wallet => {
      this.wallet = wallet;
      this.walletTotal = 0;
      wallet.forEach(element => {
        this.walletTotal += element.amount;
      });
    });
  }

  onChangeSidebar() {
    this.sidebar = !this.sidebar;
    this.openSidebar.emit(this.sidebar)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.walletSubs.unsubscribe();
  }

}
