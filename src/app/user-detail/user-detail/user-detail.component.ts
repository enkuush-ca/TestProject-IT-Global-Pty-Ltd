import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit, OnChanges {

  @Input() user: User;
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges(data) {
    if (data.user ) {
      this.buildForm();
    } else {
    }
  }


  buildForm() {
    const user = this.user;
    if (user) {
      this.form = this.fb.group({
        name: user.name,
        username: user.username,
        street: user.address.street,
        city: user.address.city,
      });
    } else {
      this.form = this.fb.group({
        name: '',
        username: '',
        street: '',
        city: '',
      });
    }
  }


}
