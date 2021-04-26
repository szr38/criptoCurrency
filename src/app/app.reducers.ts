import { ActionReducerMap } from '@ngrx/store';

import { walletClass } from './dashboard/pages/wallet/wallet.model';
import * as fromWallet from './dashboard/pages/wallet/wallet.reducer';

import { criptomoneyClass } from './shared/criptomoney.model';
import * as fromCriptomoney from './shared/criptomoney.reducer';

import { graphicClass } from './shared/redux-graphic/graphic.model';
import * as fromGraphic from './shared/redux-graphic/graphic.reducer';


export interface AppState {
    // ui: fromUI.State;
    wallet: walletClass[];
    criptomoney: criptomoneyClass[];
    graphic: graphicClass;
}

export const appReducers: ActionReducerMap<AppState> = {
    // ui: fromUI.uiReducer,
    wallet: fromWallet.walletReducer,
    criptomoney:fromCriptomoney.criptomoneyReducer,
    graphic:fromGraphic.graphicReducer
};