import {Component, OnInit} from '@angular/core';
import {PostService} from "./services/post.service";
import {Post} from "./interfaces/post.interface";
import {AuthService} from "../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [`
    .wrapper-post {
      width: 100%;
      height: 100%;
      text-align: left;
      padding: 20px;
    }
  `]
})
export class PostComponent implements OnInit {

  isLoading: boolean = false;
  posts: Array<Post> = [];
  role: string = '';

  constructor(private postService: PostService, private authService: AuthService, private router: Router) {
    this.authService.currentRole.subscribe(x => {
      this.role = x;
    });
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

  goAdmin() {
    this.router.navigate(['/admin']);
  }
}
