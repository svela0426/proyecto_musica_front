/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { HttpClientModule } from '@angular/common/http';


import { ListaCapituloComponent } from './listaCapitulo.component';
import { CapituloService } from '../capitulo.service';
import { Podcast } from 'src/app/podcast/podcast';
import { Capitulo } from '../capitulo';

describe('ListaCapituloComponent', () => {
 let component: ListaCapituloComponent;
 let fixture: ComponentFixture<ListaCapituloComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ ListaCapituloComponent ],
     providers: [ CapituloService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ListaCapituloComponent);
   component = fixture.componentInstance;

   let podcast = new Podcast(
     faker.datatype.number(),
     faker.lorem.sentence(),faker.lorem.sentence(),faker.image.imageUrl(),faker.lorem.sentence(),faker.datatype.number()
   );
   component.capitulos = [
     new Capitulo(faker.lorem.sentence(),podcast,
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.image.imageUrl(),
       faker.datatype.number(),

     ),
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have an img element ', () => {
   expect(debug.query(By.css('img')).attributes['alt']).toEqual(
     component.capitulos[0].titulo
   );
 });

 it('should have an input element ', () => {
  expect(debug.query(By.css('input')).attributes['id']).toEqual(
    "myInput"
  );
});

});
