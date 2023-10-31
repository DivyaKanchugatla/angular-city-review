import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CityReviewComponent } from './components/city-review/city-review.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent 
  },
  {
    path:"review",
    component:CityReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
