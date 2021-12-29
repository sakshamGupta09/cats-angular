import { TestBed } from '@angular/core/testing';

import { JoborderService } from './joborder.service';

describe('JoborderService', () => {
  let service: JoborderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoborderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
