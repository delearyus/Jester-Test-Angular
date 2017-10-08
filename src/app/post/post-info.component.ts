import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { PostService } from './post.service';
import { Post } from './post';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'post-details',
    templateUrl: './post-info.component.html'
})

export class PostInfoComponent implements OnInit {
    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    post: Post
    ngOnInit(): void {
        this.route.paramMap.switchMap(
            (params: ParamMap) => this.postService.getPost(+params.get("id")))
            .subscribe(post => this.post = post);
    }

    goBack(): void {
        this.location.back();
    }
}
