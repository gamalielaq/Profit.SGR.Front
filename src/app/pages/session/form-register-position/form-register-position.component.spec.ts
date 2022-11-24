import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterPositionComponent } from './form-register-position.component';

describe('FormRegisterPositionComponent', () => {
  let component: FormRegisterPositionComponent;
  let fixture: ComponentFixture<FormRegisterPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
