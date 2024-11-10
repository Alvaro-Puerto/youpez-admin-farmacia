import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarUmComponent } from './eliminar-um.component';

describe('EliminarUmComponent', () => {
  let component: EliminarUmComponent;
  let fixture: ComponentFixture<EliminarUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
