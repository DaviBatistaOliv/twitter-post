import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAreatextComponent } from './input-areatext.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  declarations: [InputAreatextComponent],
  imports: [
    CommonModule, //
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule,
  ],
  exports: [InputAreatextComponent],
})
export class InputAreatextModule {}
