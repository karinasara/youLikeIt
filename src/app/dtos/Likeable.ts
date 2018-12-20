import {Like} from './Like';

export interface Likeable {
  id: string;
  likes: Like[];
}
