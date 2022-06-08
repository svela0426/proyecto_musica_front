/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ListaPodcastComponent } from './listaPodcast.component';
import { HttpClientModule } from '@angular/common/http';
import { Capitulo } from 'src/app/capitulo/capitulo';
import { Podcast } from '../podcast';
import faker from '@faker-js/faker';
import { PodcastDetail } from '../podcast-detail';
import { PodcastService } from '../podcast.service';

describe('ListaPodcastComponent', () => {
 let component: ListaPodcastComponent;
 let fixture: ComponentFixture<ListaPodcastComponent>;
 let debug: DebugElement;


 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ ListaPodcastComponent ],
     providers:[PodcastService]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ListaPodcastComponent);
   component = fixture.componentInstance;
   let podcastf= new Podcast(faker.datatype.number(),
 faker.lorem.sentence(),
 faker.lorem.sentence(),
 faker.image.imageUrl(),
 faker.lorem.sentence(),faker.datatype.number());
 let cap1= new Capitulo(faker.lorem.sentence(),podcastf,faker.datatype.number(),faker.lorem.sentence(),faker.image.imageUrl(),faker.datatype.number());
 let cap2= new Capitulo(faker.lorem.sentence(),podcastf,faker.datatype.number(),faker.lorem.sentence(),faker.image.imageUrl(),faker.datatype.number());
 let  capitulos= new Array<Capitulo>(cap1,cap2);

 component.podcasts= [
  new PodcastDetail(
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    faker.lorem.sentence(),
    faker.datatype.number(),
    capitulos
  ),
];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have an input element ', () => {
  expect(debug.query(By.css('input')).attributes['id']).toEqual(
    "myInput"
  );
});

it('should have an img element', () => {
  expect(debug.query(By.css('img')).attributes['src']).toEqual(
    component.podcasts[0].imagen
  );
});

it('should have an overlay element', () => {
  expect(debug.query(By.css('overlay'))).toBeTruthy;
});



});
