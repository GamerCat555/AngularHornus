import { TestBed, inject } from '@angular/core/testing';

import { ToutTubeSearchService } from './tout-tube-search.service';

describe('ToutTubeSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToutTubeSearchService]
    });
  });

  it('should be created', inject([ToutTubeSearchService], (service: ToutTubeSearchService) => {
    expect(service).toBeTruthy();
  }));
});
