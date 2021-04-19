import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { walletClass } from './wallet.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.sass']
})
export class WalletComponent implements OnInit {

  walletSubs: Subscription = new Subscription();
  wallet:walletClass[];
  walletTotal:number=0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('wallet').subscribe( wallet =>{
      this.wallet=wallet;
      wallet.forEach(element => {
        this.walletTotal+=element.amount;
      });
      console.log(wallet, this.walletTotal);
    });
  }

}
