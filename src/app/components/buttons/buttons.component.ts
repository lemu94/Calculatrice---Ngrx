import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Calculatrice } from '../../store/calculatrice/calculatrice.model';
import { Observable, map } from 'rxjs';
import { OperationGroup } from '../../store/calculatrice/calculatrice.actions';
import { ButtonsActions } from '../../store/buttons/buttons.actions';
import { ButtonOperators, ButtonValue, ButtonsC } from '../../store/buttons/buttons.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent implements OnInit {


  calculatrice$ : Observable<Calculatrice>;
  buttons$ : Observable<ButtonsC>;
  buttonvalues : number[]= ButtonValue;
  buttonOperators : string[]= ButtonOperators;
  constructor(private store : Store<{Calculatrice : Calculatrice}>,private store2 : Store<{Buttonsc : ButtonsC}>)
  {
    this.calculatrice$ = this.store.select('Calculatrice');
    this.buttons$ = this.store2.select('Buttonsc');

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  addition (nombre : number)
  {

    this.store.dispatch(OperationGroup.addition({nombre}))
  }
  ajout_nombre(nombre : number)
  {

    this.store2.dispatch(ButtonsActions.ajout({nombre}))

  }


}
