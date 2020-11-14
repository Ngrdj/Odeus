import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomScenario.DialogComponent } from './random-scenario.dialog.component';

describe('RandomScenario.DialogComponent', () => {
  let component: RandomScenario.DialogComponent;
  let fixture: ComponentFixture<RandomScenario.DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomScenario.DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomScenario.DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
