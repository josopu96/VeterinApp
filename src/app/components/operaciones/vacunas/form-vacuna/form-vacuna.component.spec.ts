import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVacunaComponent } from './form-vacuna.component';

describe('FormVacunaComponent', () => {
  let component: FormVacunaComponent;
  let fixture: ComponentFixture<FormVacunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVacunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
