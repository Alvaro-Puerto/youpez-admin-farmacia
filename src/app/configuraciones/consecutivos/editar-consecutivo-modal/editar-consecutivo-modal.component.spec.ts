import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsecutivoModalComponent } from './editar-consecutivo-modal.component';

describe('EditarConsecutivoModalComponent', () => {
  let component: EditarConsecutivoModalComponent;
  let fixture: ComponentFixture<EditarConsecutivoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConsecutivoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConsecutivoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
