import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Personaje } from '../models/personaje.interface';

@Injectable({ //! DECORATOR: Describir la naturaleza de la clase, INJECTABLE: DESDE DONDE SE VA A CONSUMIR
  providedIn: 'root'
})
export class PokemonService {
//https://pokeapi.co/api/v2/personaje
  constructor( private http:HttpClient) { } //! inyeccion de dependencias


  getPersonajes(): Observable<Personaje[]> {
    const url:string = 'https://rickandmortyapi.com/api/character';
    return this.http.get(url)
    .pipe( //! MOLDEANDO LA INFORM
      map(( el:any) => {// ! OPERATOR: MODIFICAR EL FLUJO DE LA INFORMACION (MODIFICAR AL OBSERVABLE)
        return el.results
      })
    )

  }
}
