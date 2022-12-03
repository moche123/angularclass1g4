import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService:AuthService,
    private router:Router
  ){}

  canActivate(): Observable<boolean> | boolean {
    //! SI NO ESTA LOGUEADO; SI PUEDES ENTRAR AL LOGIN

    //! CASO: (TRUE)SI ESTOY LOGUEADO --> NO TE DEJO ENTRAR AL LOGIN, MANDAME A PERSONAJES
    //! CASO: (FALSE)NO ESTOY LOGUEADO --> TE DEJO ENTRAR AL LOGIN
    return !this._authService.isLoggedIn() ?  true : this.redirectToPages()

  }

  private redirectToPages(){
    this.router.navigateByUrl('/personaje/todos')
    return false
  }
  
}
