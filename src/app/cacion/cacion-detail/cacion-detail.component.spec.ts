
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CacionDetailComponent } from './cacion-detail.component';
import { faker } from '@faker-js/faker';
import { CacionDetail } from '../cacion-detail';

describe('CacionDetailComponent', () => {
  let component: CacionDetailComponent;
  let fixture: ComponentFixture<CacionDetailComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacionDetailComponent);
    component = fixture.componentInstance;

    component.caciondetail= new CacionDetail(
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.image.imageUrl(),
      faker.image.imageUrl(),
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

