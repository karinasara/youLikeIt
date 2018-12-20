import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../dtos/User';
import {Post} from '../dtos/Post';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {SessionService} from '../services/session.service';
import {ToolbarService} from '../services/toolbar.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Like} from '../dtos/Like';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-post-edition',
  templateUrl: './post-edition.component.html',
  styleUrls: ['./post-edition.component.css']
})
export class PostEditionComponent implements OnInit {

  user: User;
  post: Post;
  originalPost: Post;
  @ViewChild(NgForm)postForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private sessionService: SessionService,
    private toolbarService: ToolbarService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initializeUser();
    this.getPost();
    this.toolbarService.addEditionToolbar('postEdition', 'Nuevo post', 'Editar post', this, this.post);
    this.sessionService.loadingPage('postEdition');
  }

  initializeUser(): void { // TODO llevar esto a una clase base
    this.user = this.userService.loggedUser;
    if (!this.userService.loggedUser) {
      this.router.navigate(['/login']).then();
    }
  }


  private getPost() {

    const id = this.route.snapshot.paramMap.get('post');
    // this.block = this.sheet.blocks.find(x => x.id === blockId.toString());

    if (id === 'new') {
      this.post = {content : '',
      title : 'Título',
      id : undefined,
      likes: []
      };
    } else {
      // this.post = Object.assign({}, this.originalPost);
      this.post = {
        id: 'mipostId',
        title : 'Mi post',
        content : ' un contenido ',
        likes: []
      };
    }
  }

}
