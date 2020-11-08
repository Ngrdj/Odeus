import { TestBed } from '@angular/core/testing';

import { PnjService } from './pnj.service';

describe('PnjService', () => {
  let service: PnjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PnjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
