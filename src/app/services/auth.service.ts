import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap,map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http:HttpClient
  ) { }

  public isLoggedIn(): boolean {
    try{
      const localStorageValue = localStorage.getItem('token')
      return localStorageValue ? true : false
    }catch(err){
      return false
    }
  }


  public login(email: string, password:string) : Observable<any> {
    const url = `${environment.urlApi}/api/auth`

    const body = { email,password }

    return this._http.post<any>(url,body)
    .pipe(
      tap(({ ok, uid, name, token }) => {
        if(ok){
          localStorage.setItem('token',token!)
          localStorage.setItem('userId',uid!)
          localStorage.setItem('name',name!)
          
        }else{
          localStorage.clear()
        }
      }),
      map( resp => resp.ok ),
      catchError(err => {
        return of(err.error)
      })
    )
    


  }


  public register(name:string, email: string, password:string, rol:number, estado:boolean) : Observable<any> {
    const url = `${environment.urlApi}/api/auth/new`

    const body = { name,email,password,rol,estado }

    return this._http.post<any>(url,body)
    .pipe(
      tap(({ ok, uid, name, token }) => {
        if(ok){
          localStorage.setItem('token',token!)
          localStorage.setItem('userId',uid!)
          localStorage.setItem('name',name!)
          
        }else{
          localStorage.clear()
        }
      }),
      map( resp => resp.ok ),
      catchError(err => {
        return of(err.error)
      })
    )
    


  }

}
