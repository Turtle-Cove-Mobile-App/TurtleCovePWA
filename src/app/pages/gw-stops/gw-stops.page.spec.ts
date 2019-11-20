import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwStopsPage } from './gw-stops.page';

describe('GwStopsPage', () => {
  let component: GwStopsPage;
  let fixture: ComponentFixture<GwStopsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwStopsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwStopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
