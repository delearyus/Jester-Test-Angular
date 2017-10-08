import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PostService } from './post/post.service';
import { UserService } from './user/user.service';

import { PostsModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PostsModule,
    NgbModule.forRoot(),
  ],
  providers: [PostService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
