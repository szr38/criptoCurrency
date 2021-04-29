import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { walletClass } from './wallet.model';
import { SetWalletAction } from './wallet.actions';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.sass']
})
export class WalletComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['amount', 'transaction', 'day', 'balance'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  walletSubs: Subscription = new Subscription();
  walletTable:walletTable[]=[];

  form: FormGroup;

  constructor(private store: Store<AppState>,
    private fb: FormBuilder,) {
    this.form = this.fb.group({
      amount: ['',],
    });
  }

  ngOnInit(): void {
    this.walletSubs = this.store.select('wallet').subscribe(wallet => {
      let cont=0;
      this.walletTable=[];
      wallet.forEach(element => {
        this.walletTable.push({
          amount:element.amount,
          day:element.day,
          transaction:element.transaction,
          balance:cont=cont+element.amount,
        })
      });
      this.dataSource.data=this.walletTable;
    });

    
  }

  onAddCredit() {
    let cod=this.walletTable[this.walletTable.length-1].transaction;
    let num=cod.split('-')[1];
    console.log('cod: ',cod,'num: ',num);
    
    const temp: walletClass = {
      amount: this.form.get('amount').value,
      transaction: 're-4',
      day: new Date,
    }
    const newWallet = new SetWalletAction(temp);
    this.store.dispatch(newWallet);
    this.form.get("amount").setValue('');
  }

  ngOnDestroy(): void {
    this.walletSubs.unsubscribe();
  }

}

interface walletTable{
  amount:number;
  transaction: string;
  day:Date;
  balance:number;
}