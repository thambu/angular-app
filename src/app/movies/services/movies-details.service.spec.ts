import { inject, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController , TestRequest} from '@angular/common/http/testing';
import { MoviesDetailsService } from './movies-details.service';
import { HttpClientModule } from '@angular/common/http';

describe('MoviesDetailsService Test', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, HttpClientModule],
        providers: [MoviesDetailsService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([MoviesDetailsService], (service: MoviesDetailsService) => {
    expect(service).toBeTruthy();
  }));

  it('should make an outgoing call to retrieve movie details', inject([MoviesDetailsService], (service: MoviesDetailsService) => {
    let userResponse;

    const data = [
      {name:'Wonder Woman',
      image:'wonderWoman.jpg',
      rating:'7.5/10',
      genre:'Action',
      summary: 'Wonder Women Summary'
     }
    ];

    service.getMovies()
    .subscribe(
      (resp) => {
          userResponse = resp;
      }
    );
    const req: TestRequest = httpTestingController.expectOne('https://spring-movies-cf.cfapps.io/');
    req.flush(data);

    expect(userResponse).toEqual(data);
    httpTestingController.verify();
  }));

  it('should throw an error', inject([MoviesDetailsService], (service: MoviesDetailsService) => {
    let errorResponse;
    service.getMovies()
    .subscribe(
      resp => {},
      err => {
        errorResponse = err;
      }
    );

    httpTestingController.expectOne('https://spring-movies-cf.cfapps.io/').error(new ErrorEvent('network error'), { status: 404});

    expect(errorResponse.status).toEqual(404);
    httpTestingController.verify();
  }));

});
