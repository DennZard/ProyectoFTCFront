import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryChangeComponent } from './delivery-change.component';

describe('DeliveryChangeComponent', () => {
  let component: DeliveryChangeComponent;
  let fixture: ComponentFixture<DeliveryChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
