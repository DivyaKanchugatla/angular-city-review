import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityReviewComponent } from './city-review.component';

describe('CityReviewComponent', () => {
  let component: CityReviewComponent;
  let fixture: ComponentFixture<CityReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityReviewComponent]
    });
    fixture = TestBed.createComponent(CityReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
