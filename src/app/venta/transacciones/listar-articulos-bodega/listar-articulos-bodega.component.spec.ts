import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArticulosBodegaComponent } from './listar-articulos-bodega.component';

describe('ListarArticulosBodegaComponent', () => {
  let component: ListarArticulosBodegaComponent;
  let fixture: ComponentFixture<ListarArticulosBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarArticulosBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarArticulosBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
