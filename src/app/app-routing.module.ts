import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { PipedirectivaComponent } from './pipedirectiva/pipedirectiva.component';

const routes: Routes = [
  
  {
    path: 'personaje',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
   
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
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
