import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../dtos/User';
import {SessionService} from '../services/session.service';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loggedUser: User;

  constructor(private router: Router,
              private sessionService: SessionService,
              private userService: UserService,
              public snackBar: MatSnackBar,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (localStorage.getItem('userName') != null) {
      this.username = localStorage.getItem('userName');
      this.password = localStorage.getItem('password');
      this.login();
    } else {
      if (this.userService.loggedUser) {
        this.userService.loggedUser = null;
        this.authService.logout();
      }
      this.sessionService.loadingPage('login');
    }
  }

  onRegisterClick(): void {
    // TODO go to registration page
  }

  onLoginClick(): void {

    if (this.username && this.password) {
      this.login();

    } else {
      console.log('missing credentials');
      this.openSnackBar('Please enter User and Password');
    }
  }

  private login() {
    this.userService.getUser(this.username, this.password).subscribe((user) => {
      if (user[0] != null) {
        this.loggedUser = {
          id: user[0].payload.doc.data().id,
          username: user[0].payload.doc.data().username,
          password: user[0].payload.doc.data().password,
          name: user[0].payload.doc.data().name,
          likes: user[0].payload.doc.data().likes,
          posts: user[0].payload.doc.data().posts
        };
        this.userService.setLoggedUser(this.loggedUser);
        this.router.navigate(['/dashboard']).then();
    } else {
      console.log('invalid user');
      this.openSnackBar('invalid credentials');
    }
  });
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'error', {
      duration: 2000,
    });
  }


}

