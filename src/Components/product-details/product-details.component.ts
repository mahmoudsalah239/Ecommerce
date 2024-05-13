import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../Services/products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,

  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId: any ;
  productDetails:any;
  constructor(
    private _ProductsService: ProductsService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    });
    this._ProductsService.getProductDetails(this.productId).subscribe({
      next: (res) => {
        console.log(res);
        this.productDetails = res.data;
      },
    });
  }
}
