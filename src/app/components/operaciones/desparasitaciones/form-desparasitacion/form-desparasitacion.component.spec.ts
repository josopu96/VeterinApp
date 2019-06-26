import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesparasitacionComponent } from './form-desparasitacion.component';

describe('FormDesparasitacionComponent', () => {
  let component: FormDesparasitacionComponent;
  let fixture: ComponentFixture<FormDesparasitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDesparasitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDesparasitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
