import * as fromWalletActions from './wallet.actions';
import { walletClass, walletInterface } from './wallet.model';


// const infotemp=new walletClass({15000,'qwert1a',new Date});
const infotemp:walletInterface={
    amount:15000,
    transaction: 'cod1',
    day:new Date,
}

const infotemp1:walletInterface={
    amount:-7500,
    transaction: 'cod2',
    day:new Date,
}

const infotemp2:walletInterface={
    amount:-3500,
    transaction: 'cod3',
    day:new Date,
}

const stateInitial: walletClass[] =  [ infotemp,infotemp1, infotemp2];


export function walletReducer( state = stateInitial, action: fromWalletActions.acciones ): walletClass[] {

    switch ( action.type ) {

        case fromWalletActions.SET_WALLET:
            const wallet= new walletClass(action.items);
            return [ ...state, wallet ];

        case fromWalletActions.UNSET_WALLET:
            return [];

        default:
            return state;

    }

}