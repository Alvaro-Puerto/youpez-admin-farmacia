import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresAuditoriaComponent } from './valores-auditoria.component';

describe('ValoresAuditoriaComponent', () => {
  let component: ValoresAuditoriaComponent;
  let fixture: ComponentFixture<ValoresAuditoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoresAuditoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoresAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
