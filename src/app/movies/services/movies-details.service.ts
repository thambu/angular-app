import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetails } from '../models/movie-details.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MoviesDetailsService {

  constructor(private http:HttpClient) { }

  public getMovies(): Observable<MovieDetails[]> {
    return this.http.get<MovieDetails[]>('https://spring-movies-cf.cfapps.io/');
  }
}
