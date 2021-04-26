import * as fromGraphicActions from './graphic.actions';
import { graphicClass } from './graphic.model';


const stateInitial: graphicClass = { amounts: [], hour: [] };

export function graphicReducer(state = stateInitial, action: fromGraphicActions.actions): graphicClass {

    switch (action.type) {

        case fromGraphicActions.UPDATECRIPTO:
            // const graphic = new graphicClass(action.items);
            // return { amounts: [5, 6, 8, 10], hour: ['a', 'b', 'c', 'd'] };
            // console.log('entro a reducer', action.amount, action.hour);
            
            return { 
                ...state, 
                amounts:action.items.amounts, 
                hour: action.items.hour
            }


        case fromGraphicActions.UNSETCRIPTO:
            // return { amounts: [], hour: [] };
            return{
                ...state,
            }

        default:
            return state;

    }
}