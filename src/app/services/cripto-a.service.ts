import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer, Subject } from 'rxjs';
import { AppState } from '../app.reducers';
import { UpdateCriptoAction } from '../shared/redux-graphic/graphic.actions';
import { graphicClass } from '../shared/redux-graphic/graphic.model';

@Injectable({
  providedIn: 'root'
})
export class CriptoAService {

  criptoA = 13000.45;
  criptoB = 65000.32;

  hola: graphicClass


  money: number[] = [];
  char: string[] = [];
  test: graphicClass;
  // test:graphicClass={    amounts:[0,1,2,3],          hour: ['a','a','a','a']}

  observerA: Observer<any> = {
    next: value => console.log('nextA:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
  };

  observerB: Observer<any> = {
    next: value => console.log('nextB:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
  };

  subjectA$ = new Subject<number>();
  subjectB$ = new Subject<number>()

  criptoA$ = new Observable(subs => {

    setInterval(
      () => {
        this.money.push(this.criptoA = this.criptoA + (Math.random() * (175 - (-175)) + (-175)));
        let chartTime: any = new Date();
        chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
        this.char.push(chartTime);
        console.log(this.test);


        this.store.dispatch(new UpdateCriptoAction(this.test))
        subs.next(this.criptoA = this.criptoA + (Math.random() * (175 - (-175)) + (-175)));
      }, 1500
    );
  });


  criptoB$ = new Observable(subs => {

    setInterval(
      () => {
        subs.next(this.criptoB = this.criptoB + (Math.random() * (200 - (-200)) + (-200)));
      }, 3000
    );
  });


  constructor(private store: Store<AppState>) {
    this.criptoA$.subscribe(this.subjectA$);
    // this.subjectA$.subscribe(this.observerA);
    this.subjectA$.subscribe();

    this.criptoB$.subscribe(this.subjectB$);
    // this.subjectB$.subscribe(this.observerB);
    this.subjectB$.subscribe();
  }
}

