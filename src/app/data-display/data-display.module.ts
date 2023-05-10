import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDisplayRoutingModule } from './data-display-routing.module';
import { DataHomeComponent } from './data-home/data-home.component';
import { ImageComponent } from './image/image.component';
import { SharedModule } from '../shared/shared.module';
import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
  declarations: [DataHomeComponent, ImageComponent, ImageListComponent],
  imports: [CommonModule, DataDisplayRoutingModule, SharedModule],
})
export class DataDisplayModule {}
