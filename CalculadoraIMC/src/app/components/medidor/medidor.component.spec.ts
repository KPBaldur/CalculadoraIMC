import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidorComponent } from './medidor.component';

describe('MedidorComponent', () => {
  let component: MedidorComponent;
  let fixture: ComponentFixture<MedidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedidorComponent]
    });
    fixture = TestBed.createComponent(MedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
