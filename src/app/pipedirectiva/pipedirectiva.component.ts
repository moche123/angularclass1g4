import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pipedirectiva',
  templateUrl: './pipedirectiva.component.html',
  styleUrls: ['./pipedirectiva.component.scss']
})
export class PipedirectivaComponent implements OnInit {

  personasObservable$:Observable<any> = new Observable

  constructor(
    private pokemonService:PokemonService
  ) {
    console.log('CONSTRUCTOR COMPONENT')
   }

  ngOnInit(): void {
    // this.personas = this.personas.sort( (a,b) => a.edad-b.edad )


    this.personasObservable$ = this.pokemonService.getPersonasToPipe()

  }

  // public personas: any[] = [
  //   {
  //     nombre: "Juan",
  //     edad: 20
  //   },
  //   {
  //     nombre: "Pedro",

  //     edad: 40
  //   },
  //   {
  //     nombre: "Maria",
  //     edad: 30
  //   },

  //   {
      
  //     nombre: "Carlos",
  //     edad: 28
      
  //   }
  // ]


  // addNew(){
  //   this.personas.push({
      
  //     nombre: "Raul",
  //     edad: 17
      
  //   })
  // }




}
