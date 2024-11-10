import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoArticuloModalComponent } from './nuevo-articulo-modal.component';

describe('NuevoArticuloModalComponent', () => {
  let component: NuevoArticuloModalComponent;
  let fixture: ComponentFixture<NuevoArticuloModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoArticuloModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoArticuloModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
