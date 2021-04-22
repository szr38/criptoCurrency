import * as fromCriptomoneyActions from './criptomoney.action';
import { criptomoneyClass, criptomoneyInterface } from './criptomoney.model';

const infotemp: criptomoneyInterface = { amount: -1300, transaction: 'cod1', day: new Date, quantityCripto: 0.3, typeMoney: 1 }

const infotemp1: criptomoneyInterface = { amount: -2166.667, transaction: 'cod2', day: new Date, quantityCripto: 0.5, typeMoney: 2}

const infotemp2: criptomoneyInterface = { amount: -5128.973, transaction: 'cod3', day: new Date, quantityCripto: 1.3, typeMoney: 1 }


const stateInitial: criptomoneyClass[] = [infotemp, infotemp1, infotemp2];

export function criptomoneyReducer(state = stateInitial, action: fromCriptomoneyActions.actions): criptomoneyClass[] {

    switch (action.type) {

        case fromCriptomoneyActions.UPDATECRIPTO:
            const criptomoney = new criptomoneyClass(action.items);
            return [...state, criptomoney];


        case fromCriptomoneyActions.UNSETCRIPTO:
            return [];

        default:
            return state;

    }

}