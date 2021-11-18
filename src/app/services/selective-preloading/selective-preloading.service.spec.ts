import { TestBed } from '@angular/core/testing';

import { SelectivePreloadingService } from './selective-preloading.service';

describe('SelectivePreloadingService', () => {
  let service: SelectivePreloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectivePreloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
