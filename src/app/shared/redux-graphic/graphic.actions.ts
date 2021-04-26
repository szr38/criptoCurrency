import { Action } from '@ngrx/store';
import { graphicClass } from './graphic.model';


export const UPDATECRIPTO = '[Graphic] update';
export const UNSETCRIPTO = '[Graphic] unset';

export class UpdateCriptoAction implements Action {
    readonly type = UPDATECRIPTO;

    constructor( public items: graphicClass ) { }
}

export class UnsetCriptoAction implements Action {
    readonly type = UNSETCRIPTO;
}

export type actions = UpdateCriptoAction|UnsetCriptoAction;