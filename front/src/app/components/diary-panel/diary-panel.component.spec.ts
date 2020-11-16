import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryPanelComponent } from './diary-panel.component';

describe('DiaryPanelComponent', () => {
  let component: DiaryPanelComponent;
  let fixture: ComponentFixture<DiaryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
