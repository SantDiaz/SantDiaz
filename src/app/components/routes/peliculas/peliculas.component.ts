import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interface/Movies';
import { Trending } from 'src/app/interface/Trending';
import { MovieSerieService } from 'src/app/service/MovieSerieService';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  filter: string = "filtro";
  Movies : Trending [] = []


  constructor() { }

  ngOnInit(): void {

  }

}
