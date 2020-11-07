import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundPanelComponent } from './sound-panel.component';

describe('SoundPanelComponent', () => {
  let component: SoundPanelComponent;
  let fixture: ComponentFixture<SoundPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
