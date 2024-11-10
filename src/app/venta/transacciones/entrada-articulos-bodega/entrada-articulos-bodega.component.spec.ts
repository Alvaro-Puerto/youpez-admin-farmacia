import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaArticulosBodegaComponent } from './entrada-articulos-bodega.component';

describe('EntradaArticulosBodegaComponent', () => {
  let component: EntradaArticulosBodegaComponent;
  let fixture: ComponentFixture<EntradaArticulosBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaArticulosBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaArticulosBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
