/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { CapituloService } from './capitulo.service';

describe('Service: Capitulo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapituloService],imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([CapituloService], (service: CapituloService) => {
    expect(service).toBeTruthy();
  }));
});
