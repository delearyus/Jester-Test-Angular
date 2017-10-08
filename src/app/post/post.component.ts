import { Component, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PostService } from './post.service';
import { Post } from './post';

@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css'],
})

export class PostComponent {
    constructor( private postService: PostService ) { }
    @Input() post: Post;
    @Input() hideButton: boolean;
}

