/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { AlbumListComponent } from './album-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { AlbumDetail } from '../album-detail';
import { Genero } from 'src/app/genero/genero';

import { RouterTestingModule } from '@angular/router/testing';

describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
      RouterTestingModule],
      declarations: [ AlbumListComponent ],
      providers: [ AlbumService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;

    let genero = new Genero(
      faker.datatype.number(),
      faker.lorem.sentence()
    );

    let album = new AlbumDetail(
      1,
      faker.lorem.words(3),
      faker.image.imageUrl(),
      [],
      [],
      [genero]
    )

    component.albums = [album
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input element ', () => {
    expect(debug.query(By.css('input')).attributes['id']).toEqual(
      "buscar_album"
    );
  });

  it('should have a button element', () => {
    expect(debug.query(By.css('button')).attributes['type']).toEqual(
      "button"
    );
  });

  it('should have an image element', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.albums[0].imagen
    );
  });
});
