import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteDetalle1Component } from './reporte-cliente-detalle1.component';

describe('ReporteClienteDetalle1Component', () => {
  let component: ReporteClienteDetalle1Component;
  let fixture: ComponentFixture<ReporteClienteDetalle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteClienteDetalle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteClienteDetalle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
