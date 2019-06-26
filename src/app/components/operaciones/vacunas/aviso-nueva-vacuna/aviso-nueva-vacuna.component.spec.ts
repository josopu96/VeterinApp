import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoNuevaVacunaComponent } from './aviso-nueva-vacuna.component';

describe('AvisoNuevaVacunaComponent', () => {
  let component: AvisoNuevaVacunaComponent;
  let fixture: ComponentFixture<AvisoNuevaVacunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoNuevaVacunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoNuevaVacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
