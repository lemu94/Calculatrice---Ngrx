import { createReducer,on } from "@ngrx/store";
import { ButtonsC } from "./buttons.model";
import { ButtonsActions } from "./buttons.actions";


export const initialState :  ButtonsC = {
  nombre : 0
};



export const buttonsReducers  = createReducer(
  initialState,
  on(ButtonsActions.ajout, (_state, { nombre }) => (
    {  nombre : (_state.nombre==0?'':_state.nombre) + ''+nombre   }) ),
  on(ButtonsActions.reset, (state)=> ({...state, nombre :0 }) )
);

