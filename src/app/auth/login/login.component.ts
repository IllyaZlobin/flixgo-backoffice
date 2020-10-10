import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createFormControl();
  }

  createFormControl() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[^w]+@[a-zA-Z_]+.[a-zA-Z]{2,12}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  getEmail(): string {
    return this.loginForm.get('email').value;
  }

  getPassword(): string {
    return this.loginForm.get('password').value;
  }

  prepareLoginCredentials(): Login {
    const data = {
      email: this.getEmail(),
      password: this.getPassword(),
    };

    return data;
  }

  onSubmit() {
    const credentials = this.prepareLoginCredentials();
    this.authService.login(credentials).subscribe(res => {
      console.log(res);
    })
  }
}
