import { createAction, props } from "@ngrx/store";
import { graphic } from "../interface/interfaces";

export const UpdateGraphicAction = createAction(
    '[Graphic] update Graphic A',
    props<{ graphic:graphic }>()
);
export const UpdateGraphicBAction = createAction(
    '[Graphic] update Graphic B',
    props<{ graphic:graphic }>()
);
export const UpdateGraphicCAction = createAction(
    '[Graphic] update Graphic C',
    props<{ graphic:graphic }>()
);

export const UnsetGraphicAAction = createAction('[GraphicMoney] unset')


