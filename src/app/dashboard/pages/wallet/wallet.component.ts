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
  walletTable: walletTable[] = [];

  form: FormGroup;

  constructor(private store: Store<AppState>,
    private fb: FormBuilder,) {
    this.form = this.fb.group({
      amount: [null,],
    });
  }

  ngOnInit(): void {
    this.walletSubs = this.store.select('wallet').subscribe(wallet => {
      let cont = 0;
      this.walletTable = [];
      wallet.forEach(element => {
        this.walletTable.push({
          amount: element.amount,
          day: element.day,
          transaction: element.transaction,
          balance: cont = cont + element.amount,
        })
      });
      this.dataSource.data = this.walletTable;
    });


  }

  onAddCredit() {
    const temp: walletClass = {
      amount: this.form.get('amount').value,
      transaction: 'rel-'+this.generateRandom(5),
      day: new Date,
    }
    if (temp.amount != null && temp.amount > 0) {
      const newWallet = new SetWalletAction(temp);
      this.store.dispatch(newWallet);
      this.form.get("amount").setValue(null);
    }
  }

  ngOnDestroy(): void {
    this.walletSubs.unsubscribe();
  }

  generateRandom(num): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1 = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
      result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result1;
  }

}

interface walletTable {
  amount: number;
  transaction: string;
  day: Date;
  balance: number;
}