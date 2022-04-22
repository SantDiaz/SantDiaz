import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../interface/Movies';
import { Trending, MovieSerieBase, MovieSerieUser } from '../interface/Trending';
import { TvPopular } from '../interface/TvPopular';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class MovieSerieService {

  api_key: string = '0274ebebc236c5538b1a6854d28eac0d';
  baseUrl: string = 'https://api.themoviedb.org/3/';
   
  constructor(
    private _http :  HttpClient, 
    private fireStore : AngularFirestore
  ) { }
  
  addUser(userId:string):Promise <any> {
    return this.fireStore.collection('usuarios').doc(userId).set({})
  }   
  agregarItem(userId:string, item: any):Promise <any>{
    return this.fireStore.collection('usuarios').doc(userId).collection('movies').add(item)
  }
  getList (userId : string) : Observable <any> {
    return this.fireStore.collection('usuarios').doc(userId).collection('movies').snapshotChanges()
  }

  eliminarItem (idUser : string, id: string) : Promise <any> {
    return this.fireStore.collection(`usuarios/${idUser}/movies`).doc(id).delete();
  }

  getMovies() : Observable<Movies[]>{
    let params = new HttpParams().set('api_key', this.api_key);

    return this._http.get<Movies[]>(this.baseUrl + 'movie/popular', {params: params});
  }
  
  getTrending() : Observable<Trending[]>{
    let params = new HttpParams().set('api_key', this.api_key);

    return this._http.get<Trending[]>(this.baseUrl + 'trending/all/week', {params: params});
  }

  getSeries() : Observable<TvPopular[]>{
    let params = new HttpParams().set('api_key', this.api_key);

    return this._http.get<TvPopular[]>(this.baseUrl + 'tv/popular', {params: params});
  }

  
}
