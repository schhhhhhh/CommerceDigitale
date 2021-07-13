import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBannerAreaComponent } from './categories-banner-area.component';

describe('CategoriesBannerAreaComponent', () => {
  let component: CategoriesBannerAreaComponent;
  let fixture: ComponentFixture<CategoriesBannerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesBannerAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesBannerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
