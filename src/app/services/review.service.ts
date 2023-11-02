import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  formArray: any[] = [];

  constructor() {
    this.loadReviewsFromLocalStorage();
  }

  handleFormSubmission(review: any) {
    this.formArray.push(review);
    localStorage.setItem('reviews', JSON.stringify(this.formArray));
  }

 

  loadReviewsFromLocalStorage() {
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
      this.formArray = JSON.parse(storedReviews);
    }
  }

 
}
