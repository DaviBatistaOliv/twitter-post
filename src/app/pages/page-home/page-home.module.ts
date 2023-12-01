import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetModule } from 'src/app/features/tweet/tweet.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';

@NgModule({
  declarations: [PageHomeComponent],
  imports: [
    CommonModule, //
    PageHomeRoutingModule,
    TweetModule,
    LoadingModule,
  ],
})
export class PageHomeModule {}
