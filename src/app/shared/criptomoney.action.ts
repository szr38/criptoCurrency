import { Action } from '@ngrx/store';
import { criptomoneyClass } from './criptomoney.model';


export const UPDATE = '[CriptoMoney] purchase';

export class UpdateAction implements Action {
    readonly type = UPDATE;
    constructor( public items: criptomoneyClass ) { }
}


export type actions = UpdateAction;