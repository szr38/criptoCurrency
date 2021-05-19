import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';

import { UpdateCriptoAction } from 'src/app/shared/redux-criptomoney/criptomoney.action';
import { criptomoneyClass, criptomoneyInterface } from 'src/app/shared/redux-criptomoney/criptomoney.model';
import { graphicInterface } from 'src/app/shared/redux-graphic/graphic.reducer';
import { SetWalletAction } from '../wallet/wallet.actions';
import { walletClass } from '../wallet/wallet.model';

@Component({
  selector: 'app-cripto-money-a',
  templateUrl: './cripto-money-a.component.html',
  styleUrls: ['./cripto-money-a.component.sass']
})

export class CriptoMoneyAComponent implements OnInit, OnDestroy {

  form: FormGroup;
  criptoA: number;

  criptoMoneySub: Subscription = new Subscription();
  criptoMoney: criptomoneyInterface[];

  graphicSub: Subscription = new Subscription();
  graphic:  graphicInterface;

  
  constructor(private fb: FormBuilder,
    private store: Store<AppState>,) {
    this.criptoMoneySub = this.store.select('criptomoney').subscribe(resp => {
      this.criptoMoney = resp;
    });

    this.graphicSub = this.store.select('graphic').subscribe(resp => {
      this.graphic = resp;
    });

    this.form = this.fb.group({
      amount: [null,],
      quantity: [null,]
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.criptoMoneySub.unsubscribe()
  }

  onUpdateCripto() {
    const day = new Date;
    const cod = 'cod13';
    const amount = this.form.get('amount').value;
    const quantity= this.form.get('quantity').value;

    const wallet: walletClass = {
      amount: amount*-1,
      transaction: cod,
      day: day,
    }
    const temp: criptomoneyClass = {
      amount: amount*-1,
      transaction: cod,
      day: day,
      quantityCripto: quantity,
      typeMoney: 1
    }

    console.log('Wallet: ',wallet,' temp: ', temp)

    const newWallet = new SetWalletAction(wallet);
    this.store.dispatch(newWallet);

    const newCriptoShop = new UpdateCriptoAction(temp);
    this.store.dispatch(newCriptoShop);
  }
}
