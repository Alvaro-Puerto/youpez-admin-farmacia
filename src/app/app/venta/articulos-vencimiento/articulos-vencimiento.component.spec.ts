import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosVencimientoComponent } from './articulos-vencimiento.component';

describe('ArticulosVencimientoComponent', () => {
  let component: ArticulosVencimientoComponent;
  let fixture: ComponentFixture<ArticulosVencimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosVencimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosVencimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
