import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap,map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = `${environment.urlApi}/api/favorite`


  constructor(
    private _http:HttpClient
  ) { }

  addFavorite(body:any): Observable<any>{
    const urlAdd = `${this.url}/newFavorite`

    return this._http.post<any>(urlAdd,body)
    .pipe(
      map(res => res.ok),
      catchError(err => {
        alert('Personaje ya está en favoritos')
        return of(err.error)
      })
    )

  }

  getFavorites(): Observable<any[]> {
    const urlGet = `${this.url}/${localStorage.getItem('userId')}`

    return this._http.get<any[]>(urlGet)
    .pipe(
      map((res:any) => res.favoritos)
    )
  }

  removeFavorite( IdCharacter:any, IdUser:any ):Observable<any>{
    const urlRemove = `${this.url}/deleteFavorite`
    const options = {
      headers: new HttpHeaders({ 'Content-Type':'application/json' }),
      body: { IdCharacter,IdUser }
    }

    return this._http.delete(urlRemove,options)


  }

}
