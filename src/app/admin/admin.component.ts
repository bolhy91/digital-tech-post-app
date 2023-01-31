import {Component, OnInit} from '@angular/core';
import {PostService} from "../post/services/post.service";
import {Post, PostStatus} from "../post/interfaces/post.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [`
    .wrapper-admin {
      width: 100%;
      height: 100vh;
      text-align: left;
      background-color: white;
    }

    .margin-top {
      padding: 50px;
    }
  `]
})
export class AdminComponent implements OnInit {
  posts: Array<Post> = [];
  isLoading: boolean = false;
  postStatus = PostStatus;

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.postService.getPosts()
      .subscribe(res => {
        if (res) {
          this.posts = res;
          this.isLoading = false;
          return;
        }
      }, error => {
        this.isLoading = false;
      }, () => {
        this.isLoading = false
      });
  }

  goPost() {
    this.router.navigate(['/post']);
  }
}
