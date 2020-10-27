import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  error: string;
  constructor() {
    this.error = '';
  }

  ngOnInit(): void {}
  getError() {
    return {
      isError: this.error.length,
    };
  }
  onSubmit(): void {
    const email = this.userLogin.get('email').value;
    const password: string = this.userLogin.get('password').value;
    password.replace(/[\w\d]/g, '');
    if (
      /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email) &&
      !(password.replace(/[\w\d]/g, '').length > 0)
    ) {
      this.error = '';
    } else {
      this.error = 'Please provide valid details';
    }
  }
}
