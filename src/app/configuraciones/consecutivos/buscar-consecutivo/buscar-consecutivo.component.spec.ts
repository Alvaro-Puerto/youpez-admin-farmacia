import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarConsecutivoComponent } from './buscar-consecutivo.component';

describe('BuscarConsecutivoComponent', () => {
  let component: BuscarConsecutivoComponent;
  let fixture: ComponentFixture<BuscarConsecutivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarConsecutivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarConsecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
