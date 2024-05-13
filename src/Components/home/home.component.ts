import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './../../Services/products.service';
import { Router, RouterLink } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,SliderComponent,NavbarComponent],
templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit  {
  Products: any[] = [];

  constructor(private _prdservice: ProductsService ,private _CartService:CartService ) {


  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._prdservice.getProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.Products = res.data;
      },
      error: () => {},
    });
  }


  AddTOCart(productId:string){
this._CartService.AddToCart(productId).subscribe({
  next:(response)=>{
console.log(response);

  },
  error:(err)=>{
console.log(err);

  }
})

  }
}
