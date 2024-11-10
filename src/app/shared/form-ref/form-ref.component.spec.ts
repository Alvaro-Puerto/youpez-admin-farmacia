import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRefComponent } from './form-ref.component';

describe('FormRefComponent', () => {
  let component: FormRefComponent;
  let fixture: ComponentFixture<FormRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
