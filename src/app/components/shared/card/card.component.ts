// import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trending, MovieSerieBase } from 'src/app/interface/Trending';
import { MovieSerieService } from 'src/app/service/MovieSerieService';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // @Input() movies_series : Trending | undefined
 @Input() movies_series! : MovieSerieBase 
  @Input() isadd : Boolean = false
   user : any

  constructor(private _movieserieservice : MovieSerieService) { }


  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("usuario")!)
    console.log ("mensajee: ", this.movies_series)
    
  }
  
  agregarItem(){
 
    this._movieserieservice.agregarItem(this.user.uid, this.movies_series).then(
       () => {
         console.log("se agrego a la bd: ",this.user.uid, this.movies_series)
       }
    )
   }
 
   eliminarItem() {
     this._movieserieservice.eliminarItem(this.user.uid, this.movies_series.idGlobal).then( () => {
       console.log('se elimino correctamente')
     }).catch ( error => {
       console.log
     })
    }
 
}
