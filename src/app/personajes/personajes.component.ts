import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personaje } from '../models/personaje.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({ //! DECORATOR
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})

/*

SOLID

I : INTERFACE SEGREGATIOn

*/

export class PersonajesComponent implements OnInit,OnDestroy {
//https://pokeapi.co/api/v2/personaje

  //! VARIABLES O FUNCIONES SON PUBLICOS O PRIVADOS

  public subscriptionApi$ = new Subscription
  public personajes:Personaje[] = []


  constructor( private pokemonService:PokemonService  ) { }//! inyeccion de dependencias

  ngOnInit(): void {
    this.subscriptionApi$ = this.pokemonService.getPersonajes().subscribe(res => {
      this.personajes = res
      console.log(this.personajes)
    })

  }

  ngOnDestroy(): void {
    this.subscriptionApi$.unsubscribe()
  }


  


}
