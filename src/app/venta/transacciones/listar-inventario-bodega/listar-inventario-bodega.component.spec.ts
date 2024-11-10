import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInventarioBodegaComponent } from './listar-inventario-bodega.component';

describe('ListarInventarioBodegaComponent', () => {
  let component: ListarInventarioBodegaComponent;
  let fixture: ComponentFixture<ListarInventarioBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInventarioBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInventarioBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
