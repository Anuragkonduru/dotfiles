import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  async ngOnInit(): Promise<void> {
    this.login = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.signup = this.formBuilder.group({
      userName: ['kanu@gmail.com', [Validators.required, Validators.email]],
      firstName: ['anu', [Validators.required]],
      lastName: ['k', [Validators.required]],
      telephone: ['1234567890', [Validators.required]],
      password: ['12345', [Validators.required]],
      matchPassword: ['2345', [Validators.required]],
    });
    const loggedIn = await this.loginService.isLoggedIn();
    console.log(loggedIn);
    if (loggedIn) {
      this.router.navigate(['/']);
    }
  }
  onLogin() {
    if (this.login.valid) {
      try {
        this.loginService
          .login(this.signup.value.userName, this.signup.value.password)
          .subscribe((response) => {
            console.log(response);
          });
      } catch (error) {
        console.log('error');
        console.log(error);
      }

      // console.log(this.signup);
    }
  }
  onSignup() {
    if (this.signup.valid) {
      try {
        this.loginService
          .signup(
            this.signup.value.userName,
            this.signup.value.password,
            this.signup.value.firstName,
            this.signup.value.lastName,
            this.signup.value.telephone
          )
          .subscribe((response) => {
            console.log(response);
          });
      } catch (error) {
        console.log('error');
        console.log(error);
      }

      // console.log(this.signup);
    }
  }
}
