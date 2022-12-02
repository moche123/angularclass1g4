import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    FavoritosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ]
})
export class PersonajesModule { }
