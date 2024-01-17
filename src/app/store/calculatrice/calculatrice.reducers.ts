import { createReducer, on } from "@ngrx/store";
import { Calculatrice } from "./calculatrice.model";
import { OperationGroup } from "./calculatrice.actions";

export const initialState : ReadonlyArray <Calculatrice> = [{
  operator : '',
  nombre :0
}]

export const calculatriceReducer = createReducer(
  initialState,
  on(OperationGroup.addition, (state, { nombre }) => {

      return state.map(values=>({
        ...values,
        nombre : values.nombre + nombre,
        operator : '+'

      }))

  }),
  on(OperationGroup.soustraction , (state, {nombre})=> {

      return state.map(values=>({
          ...values,
          nombre : values.nombre + nombre,
          operator : '-'
      }))


  }  )
);
