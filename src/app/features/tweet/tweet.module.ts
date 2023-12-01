import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetBoxComponent } from './components/tweet-box/tweet-box.component';
import { TweetService } from './services/tweet/tweet.service';
import { InputAreatextModule } from 'src/app/shared/components/input-areatext/input-areatext.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { TweetPostComponent } from './components/tweet-post/tweet-post.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { AvatarModule } from 'src/app/shared/components/avatar/avatar.module';
import { TimestampPipe } from './pipes/timestamp/timestamp.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    TweetBoxComponent,
    TweetPostComponent,
    TweetListComponent,
    TimestampPipe, //
  ],
  imports: [
    CommonModule, //
    InputAreatextModule,
    ButtonModule,
    AvatarModule,
    ModalModule.forRoot(),
  ],
  exports: [
    TweetBoxComponent,
    TweetPostComponent,
    TweetListComponent, //
  ],
  providers: [TweetService],
})
export class TweetModule {}
