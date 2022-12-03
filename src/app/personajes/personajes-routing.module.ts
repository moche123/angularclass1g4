import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PersonajesComponent } from './personajes.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { 
    path: '',
    component:PersonajesComponent,
    children: [
      {
        path: 'todos',
        component: TodosComponent
        
      },
      {
        path: 'favoritos',
        component: FavoritosComponent
        
      },
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
