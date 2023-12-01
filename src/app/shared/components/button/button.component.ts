import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output('onclick')
  public click = new EventEmitter<Event>();

  @Input()
  public color!: 'primary' | 'light' | 'danger' | null;

  @Input()
  public size: 'btn-lg' | 'btn-sm' | null = null;

  @Input()
  public disabled!: boolean;

  @Input()
  public classlist!: string;
  constructor() {}

  ngOnInit(): void {}

  onClicked(e: Event): void {
    this.click.emit(e);
  }
}
