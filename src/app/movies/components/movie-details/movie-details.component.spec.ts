import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieDetailsComponent } from './movie-details.component';

import { MoviesDetailsService } from '../../services/movies-details.service';
import { HttpClientModule } from '@angular/common/http';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let service: MoviesDetailsService;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ MovieDetailsComponent ],
      providers: [MoviesDetailsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      const fixture = TestBed.createComponent(MovieDetailsComponent);
      const app = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
  });

});
