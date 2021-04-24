import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { CriptoAService } from 'src/app/services/cripto-a.service';
import { UpdateCriptoAction } from 'src/app/shared/criptomoney.action';
import { criptomoneyClass } from 'src/app/shared/criptomoney.model';
import { SetWalletAction } from '../wallet/wallet.actions';
import { walletClass } from '../wallet/wallet.model';

@Component({
  selector: 'app-cripto-money-a',
  templateUrl: './cripto-money-a.component.html',
  styleUrls: ['./cripto-money-a.component.sass']
})
export class CriptoMoneyAComponent implements OnInit {

  form: FormGroup;
  criptoA:number[];

  constructor(private fb: FormBuilder,
    private store: Store<AppState>,
    private service: CriptoAService) {
    this.form = this.fb.group({
      amount: ['',],
    });
   }

  ngOnInit(): void {
    this.service.subjectA$.subscribe(resp=>{this.criptoA=resp});
  }

  onUpdateCripto(){
    const day=new Date;
    const cod='cod13';
    const amount=-700;

    const wallet: walletClass = {
      amount: amount,
      transaction: cod,
      day: day,
    }
    const temp:criptomoneyClass={ 
      amount: amount, 
      transaction: cod, 
      day: day, 
      quantityCripto: 0.4, 
      typeMoney: 5128.973 
    }

    const newWallet = new SetWalletAction(wallet);
    this.store.dispatch(newWallet);
    
    const newCriptoShop =new UpdateCriptoAction(temp);
    this.store.dispatch(newCriptoShop);
  }
}
