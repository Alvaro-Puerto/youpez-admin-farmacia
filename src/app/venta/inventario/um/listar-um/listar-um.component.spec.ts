import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUmComponent } from './listar-um.component';

describe('ListarUmComponent', () => {
  let component: ListarUmComponent;
  let fixture: ComponentFixture<ListarUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
