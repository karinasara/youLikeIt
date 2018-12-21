import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youLikeIt';

  isLoggedIn$: Observable<boolean>;

  constructor(private userService: UserService) {
    this.isLoggedIn$ = this.userService.isLoggedIn;
  }
}
