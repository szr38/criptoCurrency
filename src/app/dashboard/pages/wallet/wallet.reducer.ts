import * as fromWalletActions from './wallet.actions';
import { walletClass, walletInterface } from './wallet.model';


const infotemp:walletInterface={
    amount:15000,
    transaction: 're-1',
    day: new Date('April 18, 2020 13:03:34'),
}

const infotemp1:walletInterface={
    amount:-7500,
    transaction: 're-2',
    day: new Date('April 19, 2020 17:15:11'),
}

const infotemp2:walletInterface={
    amount:-3500,
    transaction: 're-3',
    day: new Date('April 20, 2020 11:13:45'),
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