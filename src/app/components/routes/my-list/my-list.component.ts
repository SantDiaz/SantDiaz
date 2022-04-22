import { Component, Input, OnInit } from '@angular/core';
import { resourceUsage } from 'process';
import { elementAt } from 'rxjs';
import { MovieSerieBase } from 'src/app/interface/Trending';
import { MovieSerieService } from 'src/app/service/MovieSerieService';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  public filter: string = 'Todos';
  user: any;
  movies : any [] = [];

  
  @Input() movies_series! : MovieSerieBase 
  
  constructor( private _movieserieservice : MovieSerieService) { }

  ngOnInit(): void {
      this.user = localStorage.getItem('usuario');
      this.user = JSON.parse (this.user)
      this.getMovies();
  }
  
   getMovies() {
    this._movieserieservice.getList(this.user.uid).subscribe(
      res => {
        console.log("esto es lo q viene: ", res)
       this.movies = [];
        console.log("esto es res", res)
        res.forEach((element:any) => {
        console.log(element.payload.doc.id)
        console.log(element.payload.doc.data())
        this.movies.push({
          idGlobal: element.payload.doc.id,
          ...element.payload.doc.data(),
          })
         })
        console.log ("Resultado de la peticion:", this.movies)
      },
      error => {
        console.log("Lo siento, falló la peticion de movies", error)
            }
    )
    
   }


  }
