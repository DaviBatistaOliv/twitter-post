import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingCircleComponent } from './components/loading-circle/loading-circle.component';

@NgModule({
  declarations: [LoadingCircleComponent],
  imports: [CommonModule],
  exports: [LoadingCircleComponent],
})
export class LoadingModule {}
