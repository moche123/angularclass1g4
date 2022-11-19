import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import {HttpClientModule} from '@angular/common/http';
import { PipedirectivaComponent } from './pipedirectiva/pipedirectiva.component';
import { OrderAgeDirective } from './directivas/order-age.directive';
import { OrderAgePipe } from './pipe/order-age.pipe';

@NgModule({
  declarations: [ //! COMPONENTES
    AppComponent,
    PersonajesComponent,
    PipedirectivaComponent,
    OrderAgeDirective,
    OrderAgePipe
  ],
  imports: [//! MODULOS
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
