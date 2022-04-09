import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServicesComponent } from './product-services.component';

describe('ProductServicesComponent', () => {
  let component: ProductServicesComponent;
  let fixture: ComponentFixture<ProductServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
