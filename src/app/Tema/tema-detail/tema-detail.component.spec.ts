/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { TemaDetailComponent } from './tema-detail.component';
import { Podcast } from 'src/app/podcast/podcast';
import { TemaDetail } from '../tema-detail';

describe('TemaDetailComponent', () => {
  let component: TemaDetailComponent;
  let fixture: ComponentFixture<TemaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaDetailComponent);
    component = fixture.componentInstance;

    let podcast = new Podcast(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      faker.datatype.number(),
    );

    component.temaDetail =
      new TemaDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        [podcast],
        []
      );


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
