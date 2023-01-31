export interface User {
  _id: string;
  avatar?: string;
  username: string;
  name: string;
  role: Role
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER"
}
