import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnaliticaComponent } from './form-analitica.component';

describe('FormAnaliticaComponent', () => {
  let component: FormAnaliticaComponent;
  let fixture: ComponentFixture<FormAnaliticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAnaliticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAnaliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
