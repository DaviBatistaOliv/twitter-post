import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tw-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.scss'],
})
export class TweetBoxComponent implements OnInit {
  @Input()
  public avatar = '/assets/img/default_profile.png';

  @Output() tweet = new EventEmitter<string>();

  control = new FormControl('', {
    validators: [
      Validators.maxLength(130), //
      Validators.required,
    ],
  });

  ngOnInit(): void {}

  onTweet(): void {
    this.tweet.emit(this.control.value);
    this.control.setValue('');
  }
}
