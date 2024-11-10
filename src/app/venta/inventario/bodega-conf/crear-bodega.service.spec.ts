import { TestBed } from '@angular/core/testing';

import { CrearBodegaService } from './crear-bodega.service';

describe('CrearBodegaService', () => {
  let service: CrearBodegaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearBodegaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
