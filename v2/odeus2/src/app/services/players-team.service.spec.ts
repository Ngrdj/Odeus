import { TestBed } from '@angular/core/testing';

import { PlayersTeamService } from './players-team.service';

describe('PlayersTeamService', () => {
  let service: PlayersTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
