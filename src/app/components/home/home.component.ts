import { Component } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formArray: any[] = [];

  constructor(private taskService: ReviewService) { }

  mytasks() {
    this.formArray = this.taskService.formArray
    console.log("formArray", this.formArray);
  }
}
