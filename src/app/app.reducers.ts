import { ActionReducerMap } from '@ngrx/store';

import { walletClass } from './dashboard/pages/wallet/wallet.model';
import * as fromWallet from './dashboard/pages/wallet/wallet.reducer';

import { criptomoneyClass } from './shared/criptomoney.model';
import * as fromCriptomoney from './shared/criptomoney.reducer';


export interface AppState {
    // ui: fromUI.State;
    wallet: walletClass[];
    criptomoney: criptomoneyClass[];
}

export const appReducers: ActionReducerMap<AppState> = {
    // ui: fromUI.uiReducer,
    wallet: fromWallet.walletReducer,
    criptomoney:fromCriptomoney.criptomoneyReducer
};