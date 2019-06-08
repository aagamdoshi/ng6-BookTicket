import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-movie',
  templateUrl: './book-movie.component.html',
  styleUrls: ['./book-movie.component.scss']
})
export class BookMovieComponent implements OnInit {
  make: any;
  year: any;
  model: any;
  timings: string[];
  persons: string[];
  constructor(private fb: FormBuilder) { }

  movieDetailsForm: FormGroup;
  movieNames: any[] = [{ id: 1, name: 'Shawshank Redemption' },
  { id: 2, name: 'Batman vs Superman' },
  { id: 3, name: 'Avengers Endgame' },
  { id: 4, name: 'Harry Potter' },
  { id: 5, name: 'Aquaman' }];
  listMovieDetails: any;

  ngOnInit() {
    this.movieDetailsForm = this.fb.group({
      movieName: [''],
      timings: [''],
      persons: [''],
    });
  }

  onMovieChange(data) {
    switch (this.movieDetailsForm.value.movieName) {
      case 'Shawshank Redemption': {
        this.timings = ['10:00', '11:00', '13:00', '17:00', '20:00'];
      }
        break;
      case 'Batman vs Superman': {
        this.timings = ['10:00', '11:00', '13:00'];
      }
        break;
      case 'Avengers Endgame': {
        this.timings = ['10:00', '11:00', '13:00', '15:00'];
      }
        break;
      case 'Harry Potter': {
        this.timings = ['07:00', '12:00', '14:00', '18:00'];
      }
        break;
      case 'Aquaman': {
        this.timings = ['12:00', '14:00'];
      }
        break;
      default: {
        this.timings = ['10:00', '11:00', '13:00', '17:00', '20:00'];
      }
    }
  }

  onBookTickets(): void {
    console.log(this.movieDetailsForm.value);
  }
}
