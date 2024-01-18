import { createReducer,on } from "@ngrx/store";
import { ButtonsC } from "./buttons.model";
import { ButtonsActions } from "./buttons.actions";


export const initialState :  ButtonsC = {
  nombre : 0,
  operator : '',
  valuesave : 0
};



export const buttonsReducers  = createReducer(
  initialState,
  on(ButtonsActions.ajout, (state, { nombre }) => (
    { ...state,  nombre : (state.nombre==0?'':state.nombre) + ''+nombre   }) ),
  on(ButtonsActions.reset, (state)=> ({...state, nombre :0 }) ),
  on(ButtonsActions.operation, (state,{operator})=>({

    ...state,
    operator : operator,
    valuesave : state.nombre,
    nombre : ''



  })

  )
);

