import { Component, OnInit } from '@angular/core';
import {User} from '../dtos/User';
import {Router} from '@angular/router';
import {SessionService} from '../services/session.service';
import {UserService} from '../services/user.service';
import {Post} from '../dtos/Post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User;
  posts: Post[];

  constructor(private router: Router,
              private sessionService: SessionService,
              private userService: UserService) { }

  ngOnInit() {
    if (!this.userService.loggedUser) {
      this.router.navigate(['/login']).then();
    } else {
      this.initializeUser();
      this.sessionService.loadingPage('home');
      // localStorage.setItem("page","home");
      this.getPosts();
    }
  }
  initializeUser(): void {
    this.user = this.userService.loggedUser;
  }

  private getPosts() {

    let post2: Post;
    post2 = {
      id: 'mipostId',
      title : 'Mi post',
      content : ' un contenido ',
      likes: []
    };
    this.posts = [ post2 ];
  }

  isMine(u: User) {
    return true; // TODO
  }

}
