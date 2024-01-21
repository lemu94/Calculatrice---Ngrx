import { createReducer,on } from "@ngrx/store";
import { ButtonsC } from "./buttons.model";
import { ButtonsActions } from "./buttons.actions";


export const initialState :  ButtonsC = {
  nombre : 0 ,
  operator : '',
  valuesave : 0
};


export const buttonsReducers  = createReducer(
  initialState,
  on(ButtonsActions.ajout, 
    (state, { nombre }) => ({ ...state,  nombre : (state.nombre==0?'':state.nombre) + ''+nombre   }) ),
  on(ButtonsActions.reset, 
    (state)=> ({...state, nombre :0 }) ),
  on(ButtonsActions.operation, 
    (state,{'operator': operator,'nombre' : nombre})=>{

      let value : number =0  ;
      

      if (state.operator=='')
        {
          return {
            ...state,
            operator : operator,
            valuesave : parseFloat(nombre.toString()),
            nombre : 0
                }  
        }
        else
        {
          switch (state.operator) {

            case '+':
            value = state.valuesave + parseFloat(nombre.toString())
            break;
            case '-':
              value =  state.valuesave - parseFloat(nombre.toString())
            break;
            case 'x':
              value = state.valuesave * parseFloat(nombre.toString());
            break;
            case '/':
              value = state.valuesave / parseFloat(nombre.toString())
            break;
          }

          return {
            ...state,
            operator : operator=='='?'':operator,
            valuesave : operator=='='?0:value,
            nombre : operator=='='?value:0
                }   
        }


  }

  )
);

