import { createActionGroup, props } from "@ngrx/store";

export const OperationGroup = createActionGroup({
  source : 'Calculatrice',
  events : {
    'Addition' : props<{nombre : number}>(),
    'Soustraction': props<{nombre : number}>(),
    'Multiplication' : props<{nombre : number}>(),
    'egale': props,
    'division': props<{nombre : number}>(),
  }
})
