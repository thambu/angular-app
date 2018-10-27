import { TestBed } from '@angular/core/testing';

import { MoviesDetailsService } from './movies-details.service';

describe('MoviesDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesDetailsService = TestBed.get(MoviesDetailsService);
    expect(service).toBeTruthy();
  });
});
