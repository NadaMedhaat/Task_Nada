import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeteComponent } from './prouducts-dete.component';

describe('ProuductsDeteComponent', () => {
  let component: ProductDeteComponent;
  let fixture: ComponentFixture<ProductDeteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDeteComponent]
    });
    fixture = TestBed.createComponent(ProductDeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
