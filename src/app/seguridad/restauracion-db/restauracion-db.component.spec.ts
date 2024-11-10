import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracionDbComponent } from './restauracion-db.component';

describe('RestauracionDbComponent', () => {
  let component: RestauracionDbComponent;
  let fixture: ComponentFixture<RestauracionDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracionDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracionDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
