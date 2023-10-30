import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }
  formArray: any[] = [];
  
  handleFormSubmission(formData: any) {
    console.log('Form data received in parent component:', formData);
    // You can process the form data as needed.
    this.formArray.push(formData)
    console.log("formArray",this.formArray)
  }
}
