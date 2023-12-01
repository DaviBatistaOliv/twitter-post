import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tweet } from '../../interface/tweet.interface';

@Component({
  selector: 'tw-tweet-post',
  templateUrl: './tweet-post.component.html',
  styleUrls: ['./tweet-post.component.scss'],
})
export class TweetPostComponent implements OnInit {
  @Input()
  public tweet!: Tweet;

  @Output()
  public delete = new EventEmitter<Tweet>();

  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.delete.emit(this.tweet);
  }
}
