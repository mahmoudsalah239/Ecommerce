import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { AboutComponent } from '../Components/about/about.component';
import { NotfoundComponent } from '../Components/notfound/notfound.component';
import { CategoriesComponent } from '../Components/categories/categories.component';
import { CartComponent } from '../Components/cart/cart.component';
import { BrandsComponent } from '../Components/brands/brands.component';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './../Components/product-details/product-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Categories', component: CategoriesComponent },
  {
    path: 'ProductDetails/:id',
    canActivate: [authGuard],
    component: ProductDetailsComponent,
  },
  { path: 'cart', canActivate: [authGuard], component: CartComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotfoundComponent },
];
