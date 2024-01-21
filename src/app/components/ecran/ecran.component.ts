import { Component , signal } from '@angular/core';
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
  constructor(private storeButtons : Store<{Buttonsc : ButtonsC}>)
  {
    this.ValueButton$ = storeButtons.select('Buttonsc');
  }

  resetValue()
  {
    this.storeButtons.dispatch(ButtonsActions.reset());
  }

}
