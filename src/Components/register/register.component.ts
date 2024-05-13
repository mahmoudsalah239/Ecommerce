import { JsonPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  isloaded: boolean = false;
  ApiErrorMsg: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  RegisterForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-z]{3}[1-9]{1,5}$'),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-z]{3}[1-9]{1,5}$'),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  handleRegister(register: FormGroup) {
    this.isloaded = true;
    this._AuthService.Register(register.value).subscribe({
      next: (response) => {
        this.isloaded = false;
        if (response.message === 'success') {
          this._Router.navigate(['/Login']);
        }
      },
      error: (er) => {
        this.isloaded = false;
        console.log(er);

         this.ApiErrorMsg = er.error.message;
      },
    });
  }
}
