import { TestBed, async, inject } from '@angular/core/testing';
import { TemaService } from './tema.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Tema', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TemaService]
    });
  });

  it('should ...', inject([TemaService], (service: TemaService) => {
    expect(service).toBeTruthy();
  }));
});