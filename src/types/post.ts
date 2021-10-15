export interface Post {
  id: string;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  timestamp: Date;
}

export interface PostComment {
  id: string;
  comment: string;
  username: string;
  avatar: string;
  timestamp: Date;
}

export interface PostLike {
  id: string;
  username: string;
}
