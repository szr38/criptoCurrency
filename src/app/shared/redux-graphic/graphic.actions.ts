// import { Action } from '@ngrx/store';
// import { graphicClass } from './graphic.model';


// export const UPDATECRIPTO = '[Graphic] update';
// export const UNSETCRIPTO = '[Graphic] unset';

// export class UpdateCriptoAction implements Action {
//     readonly type = UPDATECRIPTO;

//     constructor( public items: any ) { }
// }

// export class UnsetCriptoAction implements Action {
//     readonly type = UNSETCRIPTO;
// }

// export type actions = UpdateCriptoAction|UnsetCriptoAction;







/**
 * Version Jesus
 */

import { createAction, props } from "@ngrx/store";

const UPDATECRIPTO = '[Graphic] update';

export const UpdateCriptoAction = createAction(
  UPDATECRIPTO,
  props<{amounts: any, hour: any}>()
)