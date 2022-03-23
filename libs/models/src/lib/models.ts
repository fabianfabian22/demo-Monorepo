export interface Blog {
  posts: Post[];
  category: Category;
  ads: boolean;
}

export interface Post {

  title: string;
  description: string;
  content: string;
  tags: string;
  author: Author[];

}

export interface Category {

  id: string;
  description: string;
  name: string;

}

export interface Author {

  id: string;
  name: string;
  mail: string;

}
