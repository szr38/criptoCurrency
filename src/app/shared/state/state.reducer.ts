import { Action, createReducer, on } from '@ngrx/store';
import * as fromLoadActions from './state.action';

export interface stateInterface {
    loading:boolean,
    logged:boolean,
}

export const initialState: stateInterface={
    loading:false,
    logged: false
}

export const scoreboardReducer = createReducer(
    initialState,
    on(fromLoadActions.UpdateLoadingAction, (state, { loading }) => ({
        ...state, loading:loading
    })),
    on(fromLoadActions.loggedAction, (state, { logged }) => ({
        ...state, logged:logged
    })),
    // on(fromGraphicActions.UnsetCriptoAAction, state=>({}))


);