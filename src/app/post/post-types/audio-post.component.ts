import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { AudioPost } from '../post';

@Component({
    selector: 'audio-post',
    templateUrl: './audio-post.component.html',
    styleUrls: ['./audio-post.component.css'],
})

export class AudioPostComponent implements OnInit {
    constructor(private sanitizer: DomSanitizer) { }
    @Input() content: AudioPost;

    audioUrl: SafeResourceUrl;
    ngOnInit(): void {
      switch (this.content.audioHost) {
        case "bandcamp":
          var textUrl = "https://bandcamp.com/EmbeddedPlayer/album="
                      + this.content.audioStub.album
                      + "/size=large/bgcol=333333/linkcol=ffffff/"
                      + "minimal=true/track="
                      + this.content.audioStub.track
                      + "/transparent=true/";
          break;
        case "soundcloud":
          var textUrl = "https://w.soundcloud.com/player/"
                      + "?url=https%3A//api.soundcloud.com/tracks/"
                      + this.content.audioStub.track
                      + "&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=true"
                      + "&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false"
                      + "&amp;show_teaser=false&amp;visual=true";
          break;



      }
      this.audioUrl = this.sanitizer.bypassSecurityTrustResourceUrl(textUrl);
    }
}
