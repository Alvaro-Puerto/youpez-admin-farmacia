import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTransaccionesDetalle1Component } from './reporte-transacciones-detalle1.component';

describe('ReporteTransaccionesDetalle1Component', () => {
  let component: ReporteTransaccionesDetalle1Component;
  let fixture: ComponentFixture<ReporteTransaccionesDetalle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteTransaccionesDetalle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTransaccionesDetalle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
