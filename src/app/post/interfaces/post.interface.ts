import {User} from "../../shared/interfaces/user.interface";

export interface Post {
  image?: string;
  message: string;
  likes?: Array<User>;
  author: User;
  create_at: Date;
  location: string;
  status: PostStatus
}

export enum PostStatus {
  DRAFTED = 'DRAFTED',
  DELETED = 'DELETED',
  PUBLISHED = 'PUBLISHED'
}
