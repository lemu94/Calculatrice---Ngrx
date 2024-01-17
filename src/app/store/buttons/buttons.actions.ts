import {  createActionGroup, props } from "@ngrx/store";


export const ButtonsActions = createActionGroup({
  source: 'Books',
  events: {
    'Ajout': props<{ nombre: number }>(),
    'reset': props,
  },
});
