import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarCredencialesComponent } from './cambiar-credenciales.component';

describe('CambiarCredencialesComponent', () => {
  let component: CambiarCredencialesComponent;
  let fixture: ComponentFixture<CambiarCredencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarCredencialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarCredencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
