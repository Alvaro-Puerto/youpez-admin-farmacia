import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteDetalle2Component } from './reporte-cliente-detalle2.component';

describe('ReporteClienteDetalle2Component', () => {
  let component: ReporteClienteDetalle2Component;
  let fixture: ComponentFixture<ReporteClienteDetalle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteClienteDetalle2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteClienteDetalle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
