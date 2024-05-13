import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isloaded: boolean = false;
  ApiErrorMsg: string = '';
  constructor(private _Authservice: AuthService, private _Router: Router) {}

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-z]{3}[1-9]{1,5}$'),
    ]),
  });

  handleLogin(loginfrom: FormGroup) {
    this.isloaded = true;
    this._Authservice.Login(loginfrom.value).subscribe({
      next: (response) => {
        this.isloaded = false;
        if (response.message === 'success') {
          localStorage.setItem('UserToken', response.token);
          this._Authservice.decodeUserData();
          this._Router.navigate(['/home']);
        }
        console.log(response);
      },
      error: (error) => {
        this.isloaded = false;
        this.ApiErrorMsg = error.error.message;
        console.log(error);
      },
    });
  }
}
