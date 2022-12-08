import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntregableComponent } from './registro-entregable.component';

describe('RegistroEntregableComponent', () => {
  let component: RegistroEntregableComponent;
  let fixture: ComponentFixture<RegistroEntregableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEntregableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEntregableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
