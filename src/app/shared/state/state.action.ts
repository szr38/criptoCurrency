import { createAction, props } from "@ngrx/store";

export const UpdateLoadingAction = createAction(
    '[State] update loading',
    props<{ loading:boolean }>()
);

export const loggedAction = createAction(
    '[State] update logged',
    props<{ logged:boolean }>()
);

// export const UnsetCriptoAAction = createAction('[CriptoMoney] unset')