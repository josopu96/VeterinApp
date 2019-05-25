import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoNuevaMascotaComponent } from './aviso-nueva-mascota.component';

describe('AvisoNuevaMascotaComponent', () => {
  let component: AvisoNuevaMascotaComponent;
  let fixture: ComponentFixture<AvisoNuevaMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoNuevaMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoNuevaMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
