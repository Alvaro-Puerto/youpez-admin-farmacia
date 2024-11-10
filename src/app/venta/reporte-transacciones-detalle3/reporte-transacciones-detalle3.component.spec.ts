import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTransaccionesDetalle3Component } from './reporte-transacciones-detalle3.component';

describe('ReporteTransaccionesDetalle3Component', () => {
  let component: ReporteTransaccionesDetalle3Component;
  let fixture: ComponentFixture<ReporteTransaccionesDetalle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteTransaccionesDetalle3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTransaccionesDetalle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
