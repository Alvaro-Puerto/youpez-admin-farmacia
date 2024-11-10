import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarBodegaComponent } from './eliminar-bodega.component';

describe('EliminarBodegaComponent', () => {
  let component: EliminarBodegaComponent;
  let fixture: ComponentFixture<EliminarBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
