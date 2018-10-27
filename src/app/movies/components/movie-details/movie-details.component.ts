import { Component, OnInit, Input } from '@angular/core';
import { MoviesDetailsService } from '../../services/movies-details.service';
import { MovieDetails } from '../../models/movie-details.model';
import { map } from "rxjs/operators";
import { OrderPipe } from 'ngx-order-pipe';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  @Input()
  movieDetails: MovieDetails;

  title = 'Movies';

}
