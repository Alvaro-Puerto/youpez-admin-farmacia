import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConsecutivoModalComponent } from './crear-consecutivo-modal.component';

describe('CrearConsecutivoModalComponent', () => {
  let component: CrearConsecutivoModalComponent;
  let fixture: ComponentFixture<CrearConsecutivoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearConsecutivoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConsecutivoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
