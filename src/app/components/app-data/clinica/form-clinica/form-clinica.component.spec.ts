import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClinicaComponent } from './form-clinica.component';

describe('FormClinicaComponent', () => {
  let component: FormClinicaComponent;
  let fixture: ComponentFixture<FormClinicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormClinicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
