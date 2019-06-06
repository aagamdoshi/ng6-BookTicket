import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookMovieComponent } from './book-movie/book-movie.component';
import { ShowBookingsComponent } from './show-bookings/show-bookings.component';
import { HomeComponent } from './home/home.component';
import { FormControl } from '@angular/forms';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bookMovie', component: BookMovieComponent },
  { path: 'bookings', component: ShowBookingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
