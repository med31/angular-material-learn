import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  private _maxDate : Date = new Date();

  get maxDate(): Date {
    return this._maxDate;
  }

  set maxDate(value: Date) {
    this._maxDate = value;
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  ngOnInit(): void {
    this._maxDate.setFullYear(this._maxDate.getFullYear() - 18);
  }
}
