import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../dtos/User';
import {UserService} from '../services/user.service';
import {SessionService} from '../services/session.service';
import {Post} from '../dtos/Post';
import {Like} from '../dtos/Like';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User;
  posts: Post[];

  constructor(private router: Router,
              private sessionService: SessionService,
              private userService: UserService) {
  }

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
    let post1: Post;
    post1 = {
      id: '45455644',
      title : 'Titulo 1',
      content : ' un contenido ',
      likes: []
    };
    let post2: Post;
    post2 = {
      id: 'mipostId',
      title : 'Mi post',
      content : ' un contenido ',
      likes: []
    };
    this.posts = [ post1, post2 ];
  }
}


