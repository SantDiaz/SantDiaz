import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieSerieService } from 'src/app/service/MovieSerieService';
import { AuthService } from 'src/app/service/AuthService';
import { MyListComponent } from './my-list/my-list.component';




@NgModule({
  declarations: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
    MyListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
    MyListComponent
  ],
  providers: [MovieSerieService, AuthService]
})
export class RoutesModule { }
