import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.interface';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  public personajes:Personaje[] = [
    {
      name: 'Rick',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      name: 'Morty',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
