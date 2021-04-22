import { Action } from '@ngrx/store';
import { criptomoneyClass } from './criptomoney.model';


export const UPDATECRIPTO = '[CriptoMoney] update';
export const UNSETCRIPTO = '[CriptoMoney] unset';

export class UpdateCriptoAction implements Action {
    readonly type = UPDATECRIPTO;
    constructor( public items: criptomoneyClass ) { }
}

export class UnsetCriptoAction implements Action {
    readonly type = UNSETCRIPTO;
}

export type actions = UpdateCriptoAction|UnsetCriptoAction;