import { Component, OnInit, Input } from '@angular/core';
import { MoviesDetailsService } from '../../services/movies-details.service';
import { MovieDetails } from '../../models/movie-details.model';
import { map } from "rxjs/operators";
import { OrderPipe } from 'ngx-order-pipe';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit  {

  selectedMovie: string;
  movieDetails: MovieDetails;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private movieService: MoviesDetailsService) {
  }

  ngOnInit() {
    console.log('Movie Details');
    this.route.params.subscribe(params => {
       this.selectedMovie = params['name'];

       console.log('Selected movie : ' + this.selectedMovie);
       this.movieService.getMovies()
        .pipe(
          map((data) =>  data.find(movie => movie.name === this.selectedMovie))
        ).subscribe(
          movie => { 
            console.log("Movie Details found"); 
            this.movieDetails = movie; }
        );
    });
  }

  ngOnDestroy() {
  
  }

  back() {
    this.location.back(); 
  }
  
}
