import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PipedirectivaComponent } from './pipedirectiva/pipedirectiva.component';

const routes: Routes = [
  
  {
    path: 'personaje',
    component: PersonajesComponent
    
  },
  // {
  //   path: 'personaje/:id',
  //   component: PersonajesComponent
    
  // },
  {
    path: 'pipe-directiva',
    component: PipedirectivaComponent
    
  },
  {
    path: 'parent',
    component: ParentComponent
    
  },
  {
    path: '',
    redirectTo: 'personaje',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
