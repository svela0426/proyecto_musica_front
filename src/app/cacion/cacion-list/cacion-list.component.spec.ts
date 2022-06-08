
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CacionListComponent } from './cacion-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Cacion } from '../cacion';
import { CacionService } from '../cacion.service';



describe('CacionListComponent', () => {
  let component: CacionListComponent;
  let fixture: ComponentFixture<CacionListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CacionListComponent ],
      providers: [ CacionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacionListComponent);
    component = fixture.componentInstance;

    component.cacions = [
      new Cacion(
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.image.imageUrl(),
        faker.image.imageUrl()
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 });

