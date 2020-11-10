import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategory.DialogComponent } from './create-category.dialog.component';

describe('CreateCategory.DialogComponent', () => {
  let component: CreateCategory.DialogComponent;
  let fixture: ComponentFixture<CreateCategory.DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategory.DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategory.DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
