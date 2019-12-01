import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwStopComponent } from './gw-stop.component';

describe('GwStopComponent', () => {
  let component: GwStopComponent;
  let fixture: ComponentFixture<GwStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwStopComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
