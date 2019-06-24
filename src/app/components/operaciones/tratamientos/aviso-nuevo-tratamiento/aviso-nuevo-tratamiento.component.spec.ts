import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoNuevoTratamientoComponent } from './aviso-nuevo-tratamiento.component';

describe('AvisoNuevoTratamientoComponent', () => {
  let component: AvisoNuevoTratamientoComponent;
  let fixture: ComponentFixture<AvisoNuevoTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoNuevoTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoNuevoTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
