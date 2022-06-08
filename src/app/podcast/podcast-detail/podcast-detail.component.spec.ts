/* tslint:disable:no-unused-variable */
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PodcastDetailComponent } from './podcast-detail.component';
import { faker } from '@faker-js/faker';
import { PodcastDetail } from '../podcast-detail';
import {RouterTestingModule} from "@angular/router/testing"
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PodcastService } from '../podcast.service';


describe('PodcastDetailComponent', () => {
 let component: PodcastDetailComponent;
 let fixture: ComponentFixture<PodcastDetailComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({ imports: [HttpClientModule,RouterTestingModule],
    declarations: [ PodcastDetailComponent ],
    providers:[PodcastService]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(PodcastDetailComponent);
   component = fixture.componentInstance;



   component.podcastDetail=
    new PodcastDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      []
    );

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
 it('should have an img element', () => {
  expect(debug.query(By.css('img')).attributes['alt']).toEqual(
    component.podcastDetail.titulo
  );
});

it('should have a correct title', () => {
  const title = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(title.innerHTML).toEqual(component.podcastDetail.titulo);

});


});
