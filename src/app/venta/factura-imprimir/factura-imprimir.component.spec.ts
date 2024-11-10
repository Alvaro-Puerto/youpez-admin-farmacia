import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaImprimirComponent } from './factura-imprimir.component';

describe('FacturaImprimirComponent', () => {
  let component: FacturaImprimirComponent;
  let fixture: ComponentFixture<FacturaImprimirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaImprimirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaImprimirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
