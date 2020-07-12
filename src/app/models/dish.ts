import { Comment } from './comment';
export class Dish {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  featured: boolean;
  comments: Comment[];
  constructor() {}
}
