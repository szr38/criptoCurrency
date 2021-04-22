import * as fromCriptomoneyActions from './criptomoney.action';
import { criptomoneyClass, criptomoneyInterface } from './criptomoney.model';

const infotemp: criptomoneyInterface = { amount: 15000, transaction: 'cod1', day: new Date, quantityMoney: 0.3, money: 1300 }

const infotemp1: criptomoneyInterface = { amount: -7500, transaction: 'cod2', day: new Date, quantityMoney: 0.5, money: 2166.667 }

const infotemp2: criptomoneyInterface = { amount: -3500, transaction: 'cod3', day: new Date, quantityMoney: 1.3 , money: 5128.973 }


const stateInitial: criptomoneyClass[] = [infotemp,infotemp1,infotemp2];

export function criptomoneyReducer(state = stateInitial, action: fromCriptomoneyActions.actions): criptomoneyClass[] {

    switch (action.type) {

        case fromCriptomoneyActions.UPDATE:
            const criptomoney = new criptomoneyClass(action.items);
            return [...state, criptomoney];


        default:
            return state;

    }

}