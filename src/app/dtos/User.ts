import {Likeable} from './Likeable';
import {Post} from './Post';

export interface User extends Likeable {
  id: string;
  username: string;
  password: string;
  name: string;
  posts: Post[];
}
