import { Routes} from '@angular/router'
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const moviesRoutes: Routes = [
  { path: '', component: MovieListComponent, 
     children: [
       { path: 'details', component: MovieDetailsComponent}
     ]}
]