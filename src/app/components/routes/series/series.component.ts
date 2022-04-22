import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interface/Movies';
import { Trending } from 'src/app/interface/Trending';
import { TvPopular } from 'src/app/interface/TvPopular';
import { MovieSerieService } from 'src/app/service/MovieSerieService';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  filter: string = "filtro";


  Series : Trending [] = []
  
  title: any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
