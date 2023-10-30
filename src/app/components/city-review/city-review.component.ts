import { Component } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-city-review',
  templateUrl: './city-review.component.html',
  styleUrls: ['./city-review.component.css']
})
export class CityReviewComponent {
  constructor(private taskService:ReviewService,private router:Router){}
  onSubmit(form:any){
    console.log(form.value)
    this.taskService.handleFormSubmission(form.value)
    form.resetForm();
    this.router.navigate(['']);
  }
}
