import { TestBed } from '@angular/core/testing';

import { EncountersListService } from './encounters-list.service';

describe('EncountersListService', () => {
  let service: EncountersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncountersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
