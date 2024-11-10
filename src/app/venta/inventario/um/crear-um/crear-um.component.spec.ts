import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUmComponent } from './crear-um.component';

describe('CrearUmComponent', () => {
  let component: CrearUmComponent;
  let fixture: ComponentFixture<CrearUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
