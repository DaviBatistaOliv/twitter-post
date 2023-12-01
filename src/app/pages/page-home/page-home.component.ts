import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap, timer } from 'rxjs';
import { Tweet } from 'src/app/features/tweet/interface/tweet.interface';
import { TweetService } from 'src/app/features/tweet/services/tweet/tweet.service';

@Component({
  selector: 'tw-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  public tweets$: Observable<Tweet[]>;

  constructor(private _tweetService: TweetService) {
    this.tweets$ = timer(500, 10000).pipe(
      switchMap(() => this._tweetService.asTweets())
    );
  }

  ngOnInit(): void {}

  onTweeted(value: string) {
    this._tweetService.tweeted(value);
  }

  onDeleted(post: Tweet) {
    this._tweetService.deleted(post.id);
  }

  trackBy(index: number, post: Tweet): string {
    return post.id;
  }
}
