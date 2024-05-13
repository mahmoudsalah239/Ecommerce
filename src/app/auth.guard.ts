// import { CanActivateFn} from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {

//   if(localStorage.getItem("UserToken")!==null){
//     return true;
//   }
//   else{
//     this.Router.navigate(['/login']);
//     return false;
//   }

// };

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('UserToken') !== null) {
      return true;
    } else {
      // Navigate to the login component
      this.router.navigate(['/Login']);
      return false;
    }
  }
}
