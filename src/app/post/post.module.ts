import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '../app-routing.module';

import { PostComponent } from './post.component';
import { TextPostComponent } from './post-types/text-post.component';
import { ImagePostComponent } from './post-types/image-post.component';
import { VideoPostComponent } from './post-types/video-post.component';
import { AudioPostComponent } from './post-types/audio-post.component';
import { PostInfoComponent } from './post-info.component';

@NgModule({
    declarations: [
        PostComponent,
        TextPostComponent,
        ImagePostComponent,
        VideoPostComponent,
        AudioPostComponent,
        PostInfoComponent
    ],
    imports: [ BrowserModule, FormsModule, NgbModule, AppRoutingModule ],
    exports: [ PostComponent ]
})
export class PostsModule { }

