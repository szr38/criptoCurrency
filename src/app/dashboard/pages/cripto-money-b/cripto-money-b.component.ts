import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { graphicInterface } from 'src/app/shared/redux-graphic/graphic.reducer';

@Component({
  selector: 'app-cripto-money-b',
  templateUrl: './cripto-money-b.component.html',
  styleUrls: ['./cripto-money-b.component.sass']
})
export class CriptoMoneyBComponent implements OnInit, OnDestroy {

  criptoMoneySub: Subscription = new Subscription();
  criptoMoney: graphicInterface;

  constructor(private store: Store<AppState>,) { 
    this.criptoMoneySub=this.store.select('graphic').subscribe(resp=>{
      this.criptoMoney=resp;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.criptoMoneySub.unsubscribe();
  }

}
