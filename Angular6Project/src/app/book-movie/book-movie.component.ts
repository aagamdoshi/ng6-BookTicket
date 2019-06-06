import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-movie',
  templateUrl: './book-movie.component.html',
  styleUrls: ['./book-movie.component.scss']
})
export class BookMovieComponent implements OnInit {

  name = new FormControl('');

  constructor(private fb: FormBuilder) { }

  movieDetailsForm: FormGroup;

  ngOnInit() {
        /* Initiate the form structure */
        this.movieDetailsForm = this.fb.group({
          movieName: [''],
          timings: [''],
          persons: [''],
        });
  }

}
