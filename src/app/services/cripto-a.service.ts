import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer, Subject } from 'rxjs';
import { AppState } from '../app.reducers';
import * as fromGraphicRedux from '../shared/redux-graphic/graphic.actions'
import { graphic } from '../shared/interface/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CriptoAService {

  criptoA = 13000.45;
  criptoB = 65000.32;
  criptoC = 37397.56;

  graphA: graphic = { amounts: [], hour: [] };
  graphB: graphic = { amounts: [], hour: [] };
  graphC: graphic = { amounts: [], hour: [] };

  observerA: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
  };

  subjectA$ = new Subject<number>();
  subjectB$ = new Subject<number>();
  subjectC$ = new Subject<number>();

  criptoA$ = new Observable(subs => {

    setInterval(
      () => {
        subs.next(this.criptoA = this.criptoA + (Math.random() * (175 - (-175)) + (-175)));
        let chartTime: any = new Date().toTimeString().split(' ')[0];

        this.graphA = {
          amounts: [...this.graphA.amounts, this.criptoA],
          hour: [...this.graphA.hour, chartTime]
        }
        if (this.graphA.amounts.length >= 11) {
          this.graphA.amounts.shift();
          this.graphA.hour.shift();
        }
        this.store.dispatch(fromGraphicRedux.UpdateGraphicAction({ graphic: this.graphA }));
      }, 3000
    );
  });


  criptoB$ = new Observable(subs => {

    setInterval(
      () => {
        subs.next(this.criptoB = this.criptoB + (Math.random() * (200 - (-200)) + (-200)));
        let chartTime: any = new Date().toTimeString().split(' ')[0];

        this.graphB = {
          amounts: [...this.graphB.amounts, this.criptoB],
          hour: [...this.graphB.hour, chartTime]
        }
        if (this.graphB.amounts.length >= 11) {
          this.graphB.amounts.shift();
          this.graphB.hour.shift();
        }
        this.store.dispatch(fromGraphicRedux.UpdateGraphicBAction({ graphic: this.graphB }));
      }, 3000
    );
  });

  criptoC$ = new Observable(subs => {

    setInterval(
      () => {
        subs.next(this.criptoC = this.criptoC + (Math.random() * (450 - (-450)) + (-450)));
        let chartTime: any = new Date().toTimeString().split(' ')[0];

        this.graphC = {
          amounts: [...this.graphC.amounts, this.criptoC],
          hour: [...this.graphC.hour, chartTime]
        }
        if (this.graphC.amounts.length >= 11) {
          this.graphC.amounts.shift();
          this.graphC.hour.shift();
        }
        this.store.dispatch(fromGraphicRedux.UpdateGraphicCAction({ graphic: this.graphC }));
      }, 3000
    );
  });


  constructor(private store: Store<AppState>) {
    // this.criptoA$.subscribe(this.subjectA$);
    // // this.subjectA$.subscribe(this.observerA);
    // this.subjectA$.subscribe();

    // this.criptoB$.subscribe(this.subjectB$);
    // this.subjectB$.subscribe();

    // this.criptoC$.subscribe(this.subjectC$);
    // this.subjectC$.subscribe();
  }
}

