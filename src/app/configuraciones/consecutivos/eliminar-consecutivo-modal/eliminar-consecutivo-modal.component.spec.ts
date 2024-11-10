import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarConsecutivoModalComponent } from './eliminar-consecutivo-modal.component';

describe('EliminarConsecutivoModalComponent', () => {
  let component: EliminarConsecutivoModalComponent;
  let fixture: ComponentFixture<EliminarConsecutivoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarConsecutivoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarConsecutivoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
