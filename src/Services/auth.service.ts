import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('UserToken') !== null) {
     this.decodeUserData();
    }
  }

  decodeUserData() {
    let decodeToken = JSON.stringify(localStorage.getItem('UserToken'));
    let encodedToken: any = jwtDecode(decodeToken);
    this.userData.next(encodedToken);

    console.log(this.userData);
  }
  Register(userData: object): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userData
    );
  }

  Login(loginData: object): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      loginData
    );
  }

  Logout() {
    localStorage.removeItem('UserToken');
    this.userData.next(null);
    this._Router.navigate(['/Login']);
  }
}
