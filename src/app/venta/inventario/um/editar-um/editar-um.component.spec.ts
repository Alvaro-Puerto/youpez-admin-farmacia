import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUmComponent } from './editar-um.component';

describe('EditarUmComponent', () => {
  let component: EditarUmComponent;
  let fixture: ComponentFixture<EditarUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
