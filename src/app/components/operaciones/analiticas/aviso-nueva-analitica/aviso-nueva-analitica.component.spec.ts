import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoNuevaAnaliticaComponent } from './aviso-nueva-analitica.component';

describe('AvisoNuevaAnaliticaComponent', () => {
  let component: AvisoNuevaAnaliticaComponent;
  let fixture: ComponentFixture<AvisoNuevaAnaliticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoNuevaAnaliticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoNuevaAnaliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
