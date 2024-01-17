import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { EcranComponent } from './components/ecran/ecran.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { calculatriceReducer } from './store/calculatrice/calculatrice.reducers';
import { buttonsReducers } from './store/buttons/buttons.reducers';

@NgModule({
  declarations: [
    AppComponent,
    CalculatriceComponent,
    EcranComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({Calculatrice : calculatriceReducer, Buttonsc : buttonsReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
