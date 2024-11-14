import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  signup!: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.login = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.signup = this.formBuilder.group({
      userName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      matchPassword: ['', [Validators.required]],
    });
  }
  onLogin() {
    if (this.login.valid) {
      console.log(this.login);
    }
  }
  onSignup() {
    if (this.signup.valid) {
      try {
        this.loginService.signup(
          this.signup.value('userName'),
          this.signup.value(password),
          this.signup.value(firstName),
          this.signup.value(lastName),
          this.signup.value(telephone)
          )
        }

      console.log(this.signup);
    }
  }
}
