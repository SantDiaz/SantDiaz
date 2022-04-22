import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { PeliculasComponent } from './components/routes/peliculas/peliculas.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { MyListComponent } from './components/routes/my-list/my-list.component';

const routes: Routes = [
  {
    path:'Inicio',
    component: InicioComponent   
  },
  {
    path:'Peliculas',
    component: PeliculasComponent
  },

  {
    path: 'Series',
    component: SeriesComponent
  },
  {
    path: 'Ingresar',
    component: IngresarComponent
  },
  {
    path: 'Mi Lista',
    component: MyListComponent
  },

  {
    path: '**',
    redirectTo: 'Ingresar'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
