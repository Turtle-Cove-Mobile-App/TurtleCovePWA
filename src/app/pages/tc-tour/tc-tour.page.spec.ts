import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcTourPage } from './tc-tour.page';

describe('TcTourPage', () => {
  let component: TcTourPage;
  let fixture: ComponentFixture<TcTourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcTourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcTourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
