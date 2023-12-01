import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { UniqueIdService } from 'src/app/shared/services/unique-id/unique-id.service';
import { Tweet } from '../../interface/tweet.interface';

@Injectable()
export class TweetService {
  private tweets$ = new BehaviorSubject<Tweet[]>([]);
  constructor(
    private _uniqueId: UniqueIdService,
    private _localStorageService: LocalStorageService
  ) {}

  tweeted(post: string) {
    const twitter = new Tweet(
      this._uniqueId.generateUniqueIdWithPrefix('feed'),
      new Date(),
      '/assets/img/default_profile.png',
      'DaviBatista_',
      'Davi Batista',
      post
    );

    const list_prev = this._getLocalTwitters();
    const list_now = [...list_prev, twitter];

    this._localStorageService.set('tweets', list_now);

    this.tweets$.next(list_now);
  }

  asTweets(): Observable<Tweet[]> {
    return this.tweets$
      .asObservable()
      .pipe(map((val) => this._getLocalTwitters().reverse()));
  }

  deleted(id: string) {
    const local_twitters = this._getLocalTwitters();
    const state = local_twitters.filter((post) => post.id != id);

    this._localStorageService.set('tweets', state);

    this.tweets$.next(state);
  }

  private _getLocalTwitters(): Tweet[] {
    const local_twitters = this._localStorageService.get('tweets');
    return local_twitters ? local_twitters : [];
  }
}
