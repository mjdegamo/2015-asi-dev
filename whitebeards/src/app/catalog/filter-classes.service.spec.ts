import { TestBed } from '@angular/core/testing';

import { FilterClassesService } from './filter-classes.service';

describe('FilterClassesService', () => {
  let service: FilterClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
