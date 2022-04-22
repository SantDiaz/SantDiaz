import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interface/Movies';
import { Trending } from 'src/app/interface/Trending';
import { TvPopular } from 'src/app/interface/TvPopular';
import { MovieSerieService } from 'src/app/service/MovieSerieService';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  filter: string = "filtro";

  Todos : Trending [] = []

  Movies : Trending [] = []

  Series : Trending [] = []
  
  title: any;
  
  constructor(private MovieSeriesService : MovieSerieService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getSeries();
    this.getTrending();

  }
  
  getMovies(){
    this.MovieSeriesService.getMovies().subscribe({
    next: (data : any) => {    
    this.Movies = data.results;
    console.log(data.results);
  },
  error: (err) =>{
    console.log(err);
  }
  })
}
  getTrending(){
    this.MovieSeriesService.getTrending().subscribe({
      next: (data : any) => {
        console.log("estoyenget")
       this.Todos = data.results;
      console.log(data.results);
    },
    error: (err) =>{
      console.log(err);
    }
    })
  }
  
  getSeries(){
    this.MovieSeriesService.getSeries().subscribe({
      next: (data : any) => {    
      this.Series = data.results;
      console.log(data.results);
    },
    error: (err) =>{
      console.log(err);
    }
    })
  }
  



  mostrar(string:string){
    this.filter=string
  }
 

  buscador(){
    if(this.title == ""){
      this.ngOnInit();
    }else {
      this.Todos = this.Todos.filter(res => {
        return res.title?.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
       })
     }
   }
}
