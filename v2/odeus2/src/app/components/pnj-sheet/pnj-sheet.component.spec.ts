import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnjSheetComponent } from './pnj-sheet.component';

describe('PnjSheetComponent', () => {
  let component: PnjSheetComponent;
  let fixture: ComponentFixture<PnjSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnjSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnjSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
