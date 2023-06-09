import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfullComponent } from './productfull.component';

describe('ProductfullComponent', () => {
  let component: ProductfullComponent;
  let fixture: ComponentFixture<ProductfullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductfullComponent]
    });
    fixture = TestBed.createComponent(ProductfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
