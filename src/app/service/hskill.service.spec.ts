import { TestBed } from '@angular/core/testing';

import { HskillService } from './hskill.service';

describe('HskillService', () => {
  let service: HskillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HskillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
