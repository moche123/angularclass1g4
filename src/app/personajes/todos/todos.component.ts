import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
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


  constructor( 
    private pokemonService:PokemonService,
    private _apiService:ApiService,
    private _router:Router
  ) { }//! inyeccion de dependencias

  ngOnInit(): void {
    this.subscriptionApi$ = this.pokemonService.getPersonajes().subscribe(res => {
      this.personajes = res
    })

    
  }

  //! LOCALSTORAGE: MANTIENE LOS DATOS SIEMPRE, A PESAR DE QUE SE CIERRE LA SESION DEL NAVEGADOR
  //! SESSIONSTORAGE: NO MANTIENE LOS DATOS SIEMPRE, LOS PIERDE CUANDO SE CIERRA LA SESION DEL NAVEGADOR

  addFavorite(character:any){
    //* TODO: USAR EL SERVICIO
    //IdCharacter, IdUser, nameCharacter, caracterUrlImagen
    let body = {
      IdCharacter: character.id,
      IdUser: localStorage.getItem('userId'),
      nameCharacter: character.name,
      caracterUrlImagen: character.image,
      token: localStorage.getItem('token')
    }

    this._apiService.addFavorite(body).subscribe(ok => {
      if(ok != false){
        this._router.navigateByUrl("/personaje/favoritos")
      }
    })


  }

  ngOnDestroy(): void {
    this.subscriptionApi$.unsubscribe()
  }

}
