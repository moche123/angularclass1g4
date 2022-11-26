import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
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


  getPersonasToPipe(){
    const personas: any[] = [
      {
        nombre: "Juan",
        edad: 16
      },
      {
        nombre: "Pedro",
  
        edad: 40
      },
      {
        nombre: "Maria",
        edad: 13
      },
  
      {
        
        nombre: "Carlos",
        edad: 28
        
      }
    ]

    let personasArrayModificable:any[] = []

    //! INTERVAL => 0, 1, 2, 3, 4
    //! OPERADORES => funcionalidades que modifican el conjunto de datos

    return interval(1000).pipe(

      map( i => {
        if(i < personas.length){
          personasArrayModificable.push(personas[i])
        }
        return personasArrayModificable
       
      }  ),
     

      
    )


  }




}
