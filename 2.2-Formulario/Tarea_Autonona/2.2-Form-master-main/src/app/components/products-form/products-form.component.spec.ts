import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFromComponent } from './products-form.component';  

describe('ProductsComponent', () => {
  let component: ProductsFromComponent;
  let fixture: ComponentFixture<ProductsFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
