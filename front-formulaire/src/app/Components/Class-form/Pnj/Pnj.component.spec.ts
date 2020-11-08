/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PnjComponent } from './Pnj.component';

describe('PnjComponent', () => {
  let component: PnjComponent;
  let fixture: ComponentFixture<PnjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
