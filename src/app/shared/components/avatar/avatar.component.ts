import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tw-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input()
  public src!: string;

  @Input()
  public alt!: string;

  constructor() {}

  ngOnInit(): void {}
}
