import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  data: any;
  arrayData = this.fb.array([]);

  constructor(private fb: FormBuilder) { }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  getArrayData() {
    return this.arrayData;
  }

  setArrayData(arrayData) {
    this.arrayData.push(arrayData);
  }
}
