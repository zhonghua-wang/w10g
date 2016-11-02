/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LearnNg2Component } from './learn-ng2.component';

describe('LearnNg2Component', () => {
  let component: LearnNg2Component;
  let fixture: ComponentFixture<LearnNg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnNg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnNg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
