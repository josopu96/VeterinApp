import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoNuevaDesparasitacionComponent } from './aviso-nueva-desparasitacion.component';

describe('AvisoNuevaDesparasitacionComponent', () => {
  let component: AvisoNuevaDesparasitacionComponent;
  let fixture: ComponentFixture<AvisoNuevaDesparasitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoNuevaDesparasitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoNuevaDesparasitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
