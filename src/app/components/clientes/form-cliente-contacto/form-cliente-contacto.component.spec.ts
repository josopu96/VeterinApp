import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClienteContactoComponent } from './form-cliente-contacto.component';

describe('FormClienteContactoComponent', () => {
  let component: FormClienteContactoComponent;
  let fixture: ComponentFixture<FormClienteContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormClienteContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClienteContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
