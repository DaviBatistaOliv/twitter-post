import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tw-input-areatext',
  templateUrl: './input-areatext.component.html',
  styleUrls: ['./input-areatext.component.scss'],
})
export class InputAreatextComponent implements OnInit {
  @Input()
  public control!: FormControl;

  @Input()
  public maxlength!: number;

  @Input()
  public placeholder = '';

  constructor() {}

  ngOnInit(): void {}
}
