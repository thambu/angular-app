import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesDetailsService } from './services/movies-details.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    OrderModule
  ],
  declarations: [
    MovieDetailsComponent
  ],
  providers: [
    MoviesDetailsService
  ]
})
export class MoviesModule { }
