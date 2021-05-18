import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { graphicInterface } from 'src/app/shared/redux-graphic/graphic.reducer';

@Component({
  selector: 'app-cripto-money-c',
  templateUrl: './cripto-money-c.component.html',
  styles: [
  ]
})
export class CriptoMoneyCComponent implements OnInit {

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
