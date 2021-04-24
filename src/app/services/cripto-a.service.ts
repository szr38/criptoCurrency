import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriptoAService {

  observer: Observer<any> = {
    next: value => console.log('nextA:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
  };

  subjectA$ = new Subject<number[]>();
  subjectB$ = new Subject<number>()

  criptoA$ = new Observable(subs => {
    let array: number[] = [64500.78, 64750.34, 64786.23, 65234.3242, 64750.34, 65234.3242, 65264.3742, 65334.3242, 65534.42, 65034.3242,]
    setInterval(
      () => {
        // subs.next( Math.random() * (200 - (-200)) + (-200) )
        // array.push(array[array.length-1]+Math.random() * (1000 - (-1000)) + (-1000));
        array.push(array[array.length - 1] + Math.random() * 1000);
        array.shift();
        subs.next(array);
      }, 5000
    );
  });


  criptoB$ = new Observable(subs => {

    setInterval(
      () => {
        subs.next(Math.random() * (200 - (0)) + (0))
      }, 3000
    );
  });


  constructor() {
    this.criptoA$.subscribe(this.subjectA$);
    this.subjectA$.subscribe();

    this.criptoB$.subscribe(this.subjectB$);
    this.subjectB$.subscribe(this.observer);
  }
}

