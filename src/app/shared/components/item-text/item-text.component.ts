import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../post/interfaces/post.interface";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-item-text',
  templateUrl: './item-text.component.html',
  styles: [`
    .card {
      margin: 0 auto;
    }
  `]
})
export class ItemTextComponent implements OnInit {
  @Input() post: Post = {} as Post
  userLikes: User = {} as User;
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.getUserLikesPost()
  }
  private getUserLikesPost(): { username: User, count: number } | null {
    const posts = this.post.likes;
    if (this.post && posts?.length) {
      this.userLikes = posts.pop() as User
      this.count = posts?.length
      return {username: this.userLikes, count: this.count}
    }
    return null
  }
}
