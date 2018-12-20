import {Likeable} from './Likeable';

export interface Post extends Likeable{
  id: string;
  title: string;
  content: string;
}
