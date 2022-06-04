/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurteamsComponent } from './ourteams.component';

describe('OurteamsComponent', () => {
  let component: OurteamsComponent;
  let fixture: ComponentFixture<OurteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
