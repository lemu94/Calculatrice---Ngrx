import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ButtonsActions } from '../../store/buttons/buttons.actions';
import { ButtonOperators, ButtonValue, ButtonsC } from '../../store/buttons/buttons.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent implements OnInit {



  buttons$ : Observable<ButtonsC>;
  buttonvalues : number[]= ButtonValue;
  buttonOperators : string[]= ButtonOperators;
  valeursave : number=0;
  constructor(private storeButtons : Store<{Buttonsc : ButtonsC}>)
  {

    this.buttons$ = this.storeButtons.select('Buttonsc');

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  addOperation (operator : string) : void
  {
    
    

    this.buttons$.subscribe((portal: ButtonsC) => {
      if (portal) {
       this.valeursave=   parseInt(portal.nombre.toString())
      }

    })  

    this.storeButtons.dispatch(ButtonsActions.operation({ 'operator' : operator,'nombre': this.valeursave}));



  }
  ajout_nombre(nombre : number) : void
  {
    this.storeButtons.dispatch(ButtonsActions.ajout({nombre}));
  }


}
