import { Component } from '@angular/core';
import { ButtonsC } from '../../store/buttons/buttons.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ButtonsActions } from '../../store/buttons/buttons.actions';

@Component({
  selector: 'app-ecran',
  templateUrl: './ecran.component.html',
  styleUrl: './ecran.component.css'
})
export class EcranComponent {

  ValueButton$ : Observable<ButtonsC>;
  constructor(private store : Store<{Buttonsc : ButtonsC}>)
  {

    this.ValueButton$ = store.select('Buttonsc');

  }

  resetValue()
  {

    this.store.dispatch(ButtonsActions.reset())

  }

}
