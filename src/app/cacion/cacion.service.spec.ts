import { inject, TestBed } from '@angular/core/testing';

import { CacionService } from './cacion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CacionService', () => {
  let service: CacionService;
  beforeEach(() => {

  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CacionService]
  });
});

it('should ...', inject([CacionService], (service: CacionService) => {
  expect(service).toBeTruthy();
}));
});
