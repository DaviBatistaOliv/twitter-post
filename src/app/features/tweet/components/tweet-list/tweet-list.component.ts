import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import {
  combineLatest,
  concat,
  merge,
  Subject,
  Subscription,
  takeUntil,
  zip,
} from 'rxjs';
import { Tweet } from '../../interface/tweet.interface';
import { TweetPostComponent } from '../tweet-post/tweet-post.component';

@Component({
  selector: 'tw-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TweetListComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input()
  tweets!: Tweet[] | null;

  @ViewChildren(TweetPostComponent)
  posts!: QueryList<TweetPostComponent>;

  @Output()
  delete = new EventEmitter<Tweet>();

  private _destroy$ = new Subject();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => this._listenPostChildrens());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tweets'].currentValue) {
      setTimeout(() => this._listenPostChildrens());
    }
  }

  private _listenPostChildrens() {
    merge(...this.posts.map((p) => p.delete.asObservable()))
      .pipe(takeUntil(this._destroy$))
      .subscribe((post) => {
        console.log(post);
        this.delete.emit(post);
      });
  }

  trackBy(index: number, post: Tweet): string {
    return post.id;
  }

  onDestroyTakes() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  ngOnDestroy(): void {
    this.onDestroyTakes();
  }
}
