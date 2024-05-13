import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl: string = 'https://ecommerce.routemisr.com/api/v1/cart';

  constructor(private _HttpClient: HttpClient) {}

  private getUserToken(): string {
    // This method can be enhanced to implement more secure ways to handle tokens.
    return localStorage.getItem('UserToken') || '';
  }

  AddToCart(productId: string): Observable<any> {
    const headers = new HttpHeaders({
      token: this.getUserToken(),
    });

    return this._HttpClient.post(this.apiUrl, { productId }, { headers });
  }

  GetLoggedUserCart(): Observable<any> {
    const headers = new HttpHeaders({
      token: this.getUserToken(),
    });
    return this._HttpClient.get(this.apiUrl, { headers });
  }

  RemoveSpecificCartItem(productId: string): Observable<any> {
    const headers = new HttpHeaders({
      token: this.getUserToken(),
    });
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { headers }
    );
  }

  UpdateCartProductQuantity(productId: string,count:number ): Observable<any> {
    const headers = new HttpHeaders({
      token: this.getUserToken(),
    });
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count},
      { headers }
    );
  } 
}
