import { Component, OnInit } from '@angular/core';

import { PostComponent } from '../post/post.component';
import { PostService } from '../post/post.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./app.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(private postService: PostService) { }
  posts = [];
  ngOnInit(): void {
    this.postService.getPostsWithDelay().then(posts => this.posts = posts);
  }
}
