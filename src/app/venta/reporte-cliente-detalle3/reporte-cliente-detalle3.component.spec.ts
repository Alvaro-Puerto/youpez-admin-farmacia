import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteDetalle3Component } from './reporte-cliente-detalle3.component';

describe('ReporteClienteDetalle3Component', () => {
  let component: ReporteClienteDetalle3Component;
  let fixture: ComponentFixture<ReporteClienteDetalle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteClienteDetalle3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteClienteDetalle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
