import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriptoAService {

  criptoA=13000.45;
  criptoB=65000.32;

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
        subs.next( this.criptoA=this.criptoA+(Math.random() * (175 - (-175)) + (-175) ));
      }, 3000
    );
  });


  criptoB$ = new Observable(subs => {

    setInterval(
      () => {
        subs.next( this.criptoB=this.criptoB+(Math.random() * (200 - (-200)) + (-200)) )
      }, 3000
    );
  });


  constructor() {
    this.criptoA$.subscribe(this.subjectA$);
    // this.subjectA$.subscribe(this.observerA);
    this.subjectA$.subscribe();

    this.criptoB$.subscribe(this.subjectB$);
    // this.subjectB$.subscribe(this.observerB);
    this.subjectB$.subscribe();
  }
}

