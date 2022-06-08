/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { GeneroDetailComponent } from './genero-detail.component';
import { Album } from 'src/app/album/album';
import { GeneroDetail } from '../genero-detail';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('GeneroDetailComponent', () => {
  let component: GeneroDetailComponent;
  let fixture: ComponentFixture<GeneroDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ GeneroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroDetailComponent);
    component = fixture.componentInstance;

    let album = new Album(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
    );

    component.generoDetail =
      new GeneroDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        [album]
      );


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.generoDetail.albumes[0].imagen
    );
  });

  it('should have a h1 element', () => {
    expect(debug.nativeElement.querySelector('h1').textContent).toEqual(
      component.generoDetail.nombre
    );
  });

  it('should have a p element', () => {
    expect(debug.nativeElement.querySelector('p').textContent).toContain(
      component.generoDetail.albumes.length.toString()
    );
  });
});
