import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Personaje } from '../../models/personaje.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

 
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
