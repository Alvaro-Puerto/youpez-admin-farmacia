import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTransaccionesDetalle2Component } from './reporte-transacciones-detalle2.component';

describe('ReporteTransaccionesDetalle2Component', () => {
  let component: ReporteTransaccionesDetalle2Component;
  let fixture: ComponentFixture<ReporteTransaccionesDetalle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteTransaccionesDetalle2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTransaccionesDetalle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
