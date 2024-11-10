import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBodegaComponent } from './crear-bodega.component';

describe('CrearBodegaComponent', () => {
  let component: CrearBodegaComponent;
  let fixture: ComponentFixture<CrearBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
