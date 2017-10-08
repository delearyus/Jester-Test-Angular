import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
    getPosts(): Promise<Post[]> {
        return Promise.resolve(POSTS);
    }
    getPostsWithDelay(): Promise<Post[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getPosts()), 2000);
        });
    }

    getPost(id: number): Promise<Post> {
        return this.getPosts().then(
            posts => posts.find(post => post.id === id));
    }
}
