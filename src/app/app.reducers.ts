import { ActionReducerMap } from '@ngrx/store';
import { walletClass } from './dashboard/components/wallet/wallet.model';
// import * as fromUI from './shared/ui.reducer';
import * as fromWallet from './dashboard/components/wallet/wallet.reducer';


export interface AppState {
    // ui: fromUI.State;
    wallet: walletClass[];
}

export const appReducers: ActionReducerMap<AppState> = {
    // ui: fromUI.uiReducer,
    wallet: fromWallet.walletReducer
};