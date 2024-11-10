import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteArticuloDetalle1Component } from './reporte-articulo-detalle1.component';

describe('ReporteArticuloDetalle1Component', () => {
  let component: ReporteArticuloDetalle1Component;
  let fixture: ComponentFixture<ReporteArticuloDetalle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteArticuloDetalle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteArticuloDetalle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
