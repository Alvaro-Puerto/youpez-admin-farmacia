import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarRolesComponent } from './configurar-roles.component';

describe('ConfigurarRolesComponent', () => {
  let component: ConfigurarRolesComponent;
  let fixture: ComponentFixture<ConfigurarRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurarRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
