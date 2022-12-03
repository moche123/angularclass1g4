import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { TodosComponent } from './todos/todos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { SharedModule } from '../shared/shared.module';
import { PersonajesComponent } from './personajes.component';


@NgModule({
  declarations: [
    TodosComponent,
    FavoritosComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    SharedModule
  ]
})
export class PersonajesModule { }
