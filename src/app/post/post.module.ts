import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PostComponent } from './post.component';
import { TextPostComponent } from './post-types/text-post.component';
import { ImagePostComponent } from './post-types/image-post.component';
import { VideoPostComponent } from './post-types/video-post.component';
import { AudioPostComponent } from './post-types/audio-post.component';

@NgModule({
    declarations: [
        PostComponent,
        TextPostComponent,
        ImagePostComponent, 
        VideoPostComponent,
        AudioPostComponent
    ],
    imports: [ BrowserModule, FormsModule, NgbModule ],
    exports: [ PostComponent ]
})
export class PostsModule { }

