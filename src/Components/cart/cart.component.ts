import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartDetails: any = '';
  constructor(private _CartService: CartService) {}
  DeleteFromCart(productId:string){
    this._CartService.RemoveSpecificCartItem(productId).subscribe({
         next: (response) => {
        this.cartDetails=response.data
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    })
console.log(productId);
  }

  updateProductQuentity(ProductId:string,count:number){
    this._CartService.UpdateCartProductQuantity(ProductId,count).subscribe({
      next: (response) => {
        this.cartDetails=response.data
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    })
  }
  ngOnInit(): void {
    this._CartService.GetLoggedUserCart().subscribe({
      next: (response) => {
        this.cartDetails=response.data
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  
  }
}
