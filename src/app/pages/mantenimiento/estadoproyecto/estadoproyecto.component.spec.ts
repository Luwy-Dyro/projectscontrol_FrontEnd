import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoproyectoComponent } from './estadoproyecto.component';

describe('EstadoproyectoComponent', () => {
  let component: EstadoproyectoComponent;
  let fixture: ComponentFixture<EstadoproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
