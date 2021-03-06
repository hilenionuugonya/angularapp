import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  });

  get username() {
    return this.form.get('account.username');
  }
}
