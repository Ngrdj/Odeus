import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightTrackerComponent } from './fight-tracker.component';

describe('FightTrackerComponent', () => {
  let component: FightTrackerComponent;
  let fixture: ComponentFixture<FightTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
