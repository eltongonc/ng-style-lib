import { Component, Input } from '@angular/core';
import { ImageType } from '../data-home/data-home.component';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent {
  @Input() images: ImageType[] = [];
}
