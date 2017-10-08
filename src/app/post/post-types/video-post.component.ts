import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { VideoPost } from '../post';

@Component({
    selector: 'video-post',
    templateUrl: './video-post.component.html',
    styleUrls: ['./video-post.component.css'],
})

export class VideoPostComponent implements OnInit {
    constructor(private sanitizer: DomSanitizer) { }
    @Input() content: VideoPost;

    videoUrl: SafeResourceUrl;
    ngOnInit(): void {
      switch (this.content.videoHost) {
        case "youtube":
          var textUrl = "https://www.youtube.com/embed/"
                      + this.content.videoStub;
          break;
        case "instagram":
          var textUrl = "https://www.instagram.com/p/"
                      + this.content.videoStub
                      + "/embed";
          break;
        case "vimeo":
          var textUrl = "https://player.vimeo.com/video/"
                      + this.content.videoStub;
          break;

      }
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(textUrl);
    }
}
