import { createAction, props } from "@ngrx/store";
import { graphic } from "../interface/interfaces";

export const UpdateCriptoAction = createAction(
    '[Graphic] update cripto A',
    props<{ cripto:graphic }>()
);
export const UpdateCriptoBAction = createAction(
    '[Graphic] update cripto B',
    props<{ cripto:graphic }>()
);
export const UpdateCriptoCAction = createAction(
    '[Graphic] update cripto C',
    props<{ cripto:graphic }>()
);

export const UnsetCriptoAAction = createAction('[CriptoMoney] unset')


