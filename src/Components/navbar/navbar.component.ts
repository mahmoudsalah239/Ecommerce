import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  
 
  IsLogin = false;
  Username: any = this._Auth.userData.getValue();

  constructor(private _Auth: AuthService) {
    _Auth.userData.subscribe({
      next: () => {
        if (_Auth.userData.getValue() !== null) {
          this.IsLogin = true;
        } else {
          this.IsLogin = false;
        }
      },
    });
  }

  LOgOut() {
    this._Auth.Logout();
  }
}
