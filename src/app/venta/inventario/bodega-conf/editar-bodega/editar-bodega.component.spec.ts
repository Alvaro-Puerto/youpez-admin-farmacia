import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBodegaComponent } from './editar-bodega.component';

describe('EditarBodegaComponent', () => {
  let component: EditarBodegaComponent;
  let fixture: ComponentFixture<EditarBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
