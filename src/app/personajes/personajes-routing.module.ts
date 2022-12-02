import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes.component';

const routes: Routes = [
  {
    path: '',
    component: PersonajesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'favoritos', component: FavoritosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
