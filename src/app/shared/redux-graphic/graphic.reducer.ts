import { Action, createReducer, on } from '@ngrx/store';
import { graphic } from '../interface/interfaces';
import * as fromGraphicActions from './graphic.actions';

export interface graphicInterface {
    criptoA:graphic,
    criptoB: graphic,
    criptoC: graphic,
}

export const initialState: graphicInterface={
    criptoA: {
        amounts: [],
        hour: []
    },
    criptoB: {
        amounts: [],
        hour: []
    },
    criptoC: {
        amounts: [],
        hour: []
    },
}

export const scoreboardReducer = createReducer(
    initialState,
    on(fromGraphicActions.UpdateGraphicAction, (state, { graphic }) => ({
        ...state,
        criptoA:graphic
    })),
    on(fromGraphicActions.UpdateGraphicBAction, (state, { graphic }) => ({
        ...state,
        criptoB:graphic
    })),
    on(fromGraphicActions.UpdateGraphicCAction, (state, { graphic }) => ({
        ...state,
        criptoC:graphic
    })),
    // on(fromGraphicActions.UnsetCriptoAAction, state=>({}))


);


























// import * as fromGraphicActions from './graphic.actions';
// import { graphicClass } from './graphic.model';


// const stateInitial: graphicClass = { amounts: [], hour: [] };

// export function graphicReducer(state = stateInitial, action: fromGraphicActions.actions): graphicClass {

//     switch (action.type) {

//         case fromGraphicActions.UPDATECRIPTO:
//             // const graphic = new graphicClass(action.items);
//             // return { amounts: [5, 6, 8, 10], hour: ['a', 'b', 'c', 'd'] };
//             // console.log('entro a reducer', action.amount, action.hour);

//             return { 
//                 ...state, 
//                 amounts:action.items.amounts, 
//                 hour: action.items.hour
//             }


//         case fromGraphicActions.UNSETCRIPTO:
//             // return { amounts: [], hour: [] };
//             return{
//                 ...state,
//             }

//         default:
//             return state;

//     }
// }