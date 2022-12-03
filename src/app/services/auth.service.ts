import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn(): boolean {
    try{
      const localStorageValue = localStorage.getItem('token')
      return localStorageValue ? true : false
    }catch(err){
      return false
    }
  }
}
