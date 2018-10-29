import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MoviesDetailsService } from '../../services/movies-details.service';
import { MovieDetails } from '../../models/movie-details.model';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies;
  selectedMovie:MovieDetails;
  searchText: string;

  constructor(private movieDetailsService: MoviesDetailsService,
    private router: Router) { }

  ngOnInit() {
   this.movieDetailsService.getMovies()
    .pipe(
    map((data) => {
      data.sort((a, b) => {
          return a.name < b.name ? -1 : 1;
       });
      return data;
   })).subscribe(
     data => { this.movies = data;
      console.log('Movies size : ' + this.movies.length);
    },
     err => { console.error('Error while retrieving movies list')},
     () => {console.log('Successfully loaded movies')}
   )
  }
}
