import { Component, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { ImagePost } from '../post';

@Component({
    selector: 'image-post',
    templateUrl: 'image-post.component.html',
    providers: [NgbCarouselConfig]
})

export class ImagePostComponent {
    @Input() content: ImagePost;
    constructor(private config: NgbCarouselConfig) {
      config.interval = 0;
    }
    getOrder(): number {
      if (this.content.imageUrl[0] instanceof Array) { return 2 }
      else if (this.content.imageUrl instanceof Array) { return 1 }
      else { return 0 }
    }

}
