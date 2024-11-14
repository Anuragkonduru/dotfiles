import { Component, Inject, OnInit } from '@angular/core';
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
  formBuilder = Inject(FormBuilder);
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {
    this.login = this.formBuilder({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.signup = this.formBuilder({
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
      // try {
      //   this.loginService.signup({
      //     userName: this.signUp.value(userName),
      //     password: this.signUp.password,
      //     firstName: this.signUp.firstName,
      //     lastName: this.signUp.lastName,
      //     telephone: this.signUp.telephone,
      //   }
      //     )
      //   }

      console.log(this.signup);
    }
  }
}
