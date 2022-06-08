/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { GeneroListComponent } from './genero-list.component';
import { GeneroService } from '../genero.service';
import { GeneroDetail } from '../genero-detail';
import { Album } from 'src/app/album/album';

import { RouterTestingModule } from '@angular/router/testing';

describe('GeneroListComponent', () => {
  let component: GeneroListComponent;
  let fixture: ComponentFixture<GeneroListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ GeneroListComponent ],
      providers: [GeneroService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroListComponent);
    component = fixture.componentInstance;

    let album = new Album(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
    );

    component.generos = [
      new GeneroDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        [album]
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input element ', () => {
    expect(debug.query(By.css('input')).attributes['id']).toEqual(
      "buscar_genero"
    );
  });

  it('should have a button element', () => {
    expect(debug.query(By.css('button')).attributes['type']).toEqual(
      "button"
    );
  });

  it('should have a image element', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.generos[0].albumes[0].imagen
    );
  });
});
