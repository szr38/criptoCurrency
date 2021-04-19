import { Action } from '@ngrx/store';
import { walletClass } from './wallet.model';

export const SET_WALLET = '[Wallet] Set Items';
export const UNSET_WALLET = '[Wallet] Unset Items';

export class SetWalletAction implements Action {
    readonly type = SET_WALLET;

    constructor( public items: walletClass ) { }
}


export class UnsetWalletAction implements Action {
    readonly type = UNSET_WALLET;
}


export type acciones = SetWalletAction | UnsetWalletAction;