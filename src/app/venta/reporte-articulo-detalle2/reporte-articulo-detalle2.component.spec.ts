import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteArticuloDetalle2Component } from './reporte-articulo-detalle2.component';

describe('ReporteArticuloDetalle2Component', () => {
  let component: ReporteArticuloDetalle2Component;
  let fixture: ComponentFixture<ReporteArticuloDetalle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteArticuloDetalle2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteArticuloDetalle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
