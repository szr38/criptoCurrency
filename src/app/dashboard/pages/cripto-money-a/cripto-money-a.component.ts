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

  criptoMoneySub: Subscription = new Subscription();
  criptoMoney: criptomoneyInterface[];

  graphicSub: Subscription = new Subscription();
  graphic: graphicInterface;

  quantity: number = 0;
  amount: number;


  constructor(private store: Store<AppState>,) {
    this.criptoMoneySub = this.store.select('criptomoney').subscribe(resp => {
      this.criptoMoney = resp;
    });

    this.graphicSub = this.store.select('graphic').subscribe(resp => {
      this.graphic = resp;
      this.amount = this.graphic.criptoA.amounts[this.graphic.criptoA.amounts.length - 1];
    });

  }

  ngOnInit(): void {  }

  ngOnDestroy(): void {
    this.criptoMoneySub.unsubscribe()
  }

  onUpdateCripto() {
    const day = new Date;
    const cod = 'cod-' + this.generateRandom(5);

    const wallet: walletClass = {
      amount: (this.amount * this.quantity) * -1,
      transaction: cod,
      day: day,
    }
    const temp: criptomoneyClass = {
      amount: (this.amount * this.quantity) * -1,
      transaction: cod,
      day: day,
      quantityCripto: this.quantity,
      typeMoney: 1
    }

    console.log('Wallet: ', wallet, ' temp: ', temp)

    const newWallet = new SetWalletAction(wallet);
    this.store.dispatch(newWallet);

    const newCriptoShop = new UpdateCriptoAction(temp);
    this.store.dispatch(newCriptoShop);
  }

  generateRandom(num): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
