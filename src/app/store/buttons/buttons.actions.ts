import {  createActionGroup, props , emptyProps } from "@ngrx/store";


export const ButtonsActions = createActionGroup({
  source: 'Buttons component',
  events: {
    'Ajout': props<{ nombre: number }>(),
    'reset': emptyProps,
  },
});
