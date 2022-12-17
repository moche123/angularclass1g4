import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  constructor(
    private _apiService:ApiService
  ){}
  public favorites: any[] = [];
  // public personajes:Personaje[] = [
  //   {
  //     name: 'Rick',
  //     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  //   },
  //   {
  //     name: 'Morty',
  //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  //   }
  // ]


  ngOnInit(): void {

    this._apiService.getFavorites().subscribe(res => {
      this.favorites = res
    })
  }

  removeFavorite(favorite:any){
    //* USE OF SERVICE

    this._apiService.removeFavorite(favorite.IdCharacter, favorite.IdUser).subscribe(res => {
      this._apiService.getFavorites().subscribe(res => {
        this.favorites = res
        alert('Acción realizada correctamente')
      })
    })

  }

}
