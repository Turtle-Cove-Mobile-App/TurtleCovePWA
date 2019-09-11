import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwTourPage } from './gw-tour.page';

describe('GwTourPage', () => {
  let component: GwTourPage;
  let fixture: ComponentFixture<GwTourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwTourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwTourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
