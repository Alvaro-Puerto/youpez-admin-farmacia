import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarUsuarioComponent } from './revisar-usuario.component';

describe('RevisarUsuarioComponent', () => {
  let component: RevisarUsuarioComponent;
  let fixture: ComponentFixture<RevisarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
