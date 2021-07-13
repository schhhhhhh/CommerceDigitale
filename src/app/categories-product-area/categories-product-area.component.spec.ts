import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesProductAreaComponent } from './categories-product-area.component';

describe('CategoriesProductAreaComponent', () => {
  let component: CategoriesProductAreaComponent;
  let fixture: ComponentFixture<CategoriesProductAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesProductAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesProductAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
