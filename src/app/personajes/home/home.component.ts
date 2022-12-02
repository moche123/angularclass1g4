import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personaje } from 'src/app/models/personaje.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
