import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDisplayComponent } from './component-display/component-display.component';

@NgModule({
  declarations: [ComponentDisplayComponent],
  imports: [CommonModule],
  exports: [ComponentDisplayComponent],
})
export class SharedModule {}
