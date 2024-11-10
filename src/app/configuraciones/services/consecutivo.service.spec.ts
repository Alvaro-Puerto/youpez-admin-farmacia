import { TestBed } from '@angular/core/testing';

import { ConsecutivoService } from './consecutivo.service';

describe('ConsecutivoService', () => {
  let service: ConsecutivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsecutivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
