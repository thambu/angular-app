import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { MoviesDetailsService } from './movies-details.service';

describe('MoviesDetailsService Test', () => {
  const API_ENDPOINT : 'https://spring-movies-cf.cfapps.io/';
  let httpClient: HttpClient;
  let injector: TestBed;
  let service: MoviesDetailsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [MoviesDetailsService]
    });
    injector = getTestBed();
    service = injector.get(MoviesDetailsService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = injector.get(HttpTestingController);
  });

  it('should make an outgoing call to get movies list', () => {
    const testMovie: MovieDetails = {name:'Wonder Woman',
                          image:'wonderWoman.jpg',
                          rating:'7.5/10',
                          genre:'Action',
                          summary:'When a pilot crashes and tells of conflict in the outside world'};

    httpClient.get<MovieDetails>(API_ENDPOINT)
      .subscribe(movie =>
        expect(movie).toEqual(testMovie)
      );
  });

  it('should through error',() => {
  let errorResponse;
  httpClient.get<MovieDetails>(API_ENDPOINT)
  .subscribe(
  resp => {
  },
  error => {
  errorResponse = errors;
  }
  );
  httpTestingController.expectOne(API_ENDPOINT).error(new ErrorEvent('network error'), {status:404});

  expect(errorResponse.status).toEqual(404);
  httpTestingController.verify();
  });


});
