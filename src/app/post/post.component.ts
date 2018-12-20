import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../dtos/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  isMyPost(post: Post) {
    return post.id === 'mipostId'; // TODO definir como determinar esto
  }

}
