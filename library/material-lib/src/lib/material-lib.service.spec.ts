import { TestBed } from '@angular/core/testing';

import { MaterialLibService } from './material-lib.service';

describe('MaterialLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialLibService = TestBed.get(MaterialLibService);
    expect(service).toBeTruthy();
  });
});
