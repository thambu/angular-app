import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movies/components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './movies/components/movie-details/movie-details.component';

const routes: Routes = [
  { path:'', component: MovieListComponent },
  { path: 'details/:name', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
