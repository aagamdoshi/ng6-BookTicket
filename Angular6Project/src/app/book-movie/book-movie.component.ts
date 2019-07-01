import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieDataService } from '../movie-data.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-book-movie',
  templateUrl: './book-movie.component.html',
  styleUrls: ['./book-movie.component.scss']
})
export class BookMovieComponent implements OnInit {
  public timings: string[];
  public persons: string[];
  public formErrors = {
    'movieName': '',
    'timings': '',
    'persons': ''
  };
  public errorCheck: boolean;


  constructor(private fb: FormBuilder,
    private router: Router,
    private data: MovieDataService) {

  }

  movieDetailsForm: FormGroup;
  movieNames: any[] = [{ id: 1, name: 'Shawshank Redemption' },
  { id: 2, name: 'Batman vs Superman' },
  { id: 3, name: 'Avengers Endgame' },
  { id: 4, name: 'Harry Potter' },
  { id: 5, name: 'Aquaman' }];
  listMovieDetails: any;


  ngOnInit() {
    this.movieDetailsForm = this.fb.group({
      movieName: ['', Validators.required],
      timings: ['', Validators.required],
      persons: ['', [Validators.required, Validators.maxLength(2)]],
    });
  }

  onMovieChange() {
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
    if (this.movieDetailsForm.get('movieName').value == '' || this.movieDetailsForm.get('timings').value == '' || this.movieDetailsForm.get('persons').value == '')
      alert("Please fill in all mandatory details");
    else {
      this.errorCheck = this.logValidationErrors(this.movieDetailsForm);
      this.data.setData(this.movieDetailsForm);
      if (!this.errorCheck) {
        alert("Bookings Confirmed Successfully !!")
        this.router.navigate(['/bookings']).then(nav => {
        }, err => {
          console.log(err);
        })
      }
    }
  }

  // This object contains all the validation messages for this form
  validationMessages = {
    'movieName': {
      'required': 'You must select a movie to continue'
    },
    'timings': {
      'required': 'Uh! oh.. Time needs to be selected',
    },
    'persons': {
      'required': 'For how many people are you booking ???..',
      'maxlength': 'Can select upto 10 persons only !!!'
    }
  };

  logValidationErrors(group: FormGroup = this.movieDetailsForm): boolean {
    var errorOccured = false;
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid
        && (abstractControl.touched || abstractControl.dirty)) {
        errorOccured = true;
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

    });
    return errorOccured;
  }

  restrictSpecialChars(e) {
    var pattern = /^\d+$/;
    let check = pattern.test(e.key);
    if (check)
      return true;
    else
      return false;

  }

  onBookRepeatedTickets() {
    // this.movieDetailsForm = this.fb.group({
    //   movieName: ['', Validators.required],
    //   timings: ['', Validators.required],
    //   persons: ['', [Validators.required, Validators.maxLength(2)]],
    // });

    if (this.movieDetailsForm.get('movieName').value == '' || this.movieDetailsForm.get('timings').value == '' || this.movieDetailsForm.get('persons').value == '')
      alert("Please fill in all mandatory details");
    else {
      this.errorCheck = this.logValidationErrors(this.movieDetailsForm);
      this.data.setArrayData(this.movieDetailsForm);
      this.movieDetailsForm = this.fb.group({
        movieName: ['', Validators.required],
        timings: ['', Validators.required],
        persons: ['', [Validators.required, Validators.maxLength(2)]]
      });
      if (!this.errorCheck) {
        alert("Current Booking Confirmed Successfully, please add other booking Details !!");
      }
    }
  }

  createItem(): FormGroup {
    return this.fb.group({
      movieName: '',
      timings: '',
      persons: ''
    });
  }



}
