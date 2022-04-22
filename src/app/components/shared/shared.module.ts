import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RoutesModule } from '../routes/routes.module';
import { MovieSerieService } from 'src/app/service/MovieSerieService';




@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    CardComponent
  ],
  providers: [MovieSerieService] 
})
export class SharedModule { }
