import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersonajesGuard implements CanActivate {
  constructor(private authService:AuthService,private router: Router) {}

  canActivate(): Observable<boolean> | boolean  {
    return ( this.authService.isLoggedIn() ) ? true: this.redirectToLogin();
  }

  private redirectToLogin(){
    this.router.navigateByUrl('/auth/login');
    return false;
  }
  
}
