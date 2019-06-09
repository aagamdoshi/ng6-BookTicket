import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-show-bookings',
  templateUrl: './show-bookings.component.html',
  styleUrls: ['./show-bookings.component.scss']
})
export class ShowBookingsComponent implements OnInit {
  public movieDetails: any;
  public arrayData = this.fb.array([]);
  constructor(private data: MovieDataService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.movieDetails = this.data.getData();
    this.arrayData = this.data.getArrayData();
  }

}
