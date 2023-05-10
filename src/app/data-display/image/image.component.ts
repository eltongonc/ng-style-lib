import { Component, Input } from '@angular/core';

export type MaskShape =
  | 'mask-heart'
  | 'mask-squircle'
  | 'mask-hexagon'
  | 'mask-circle'
  | 'mask-star-2'
  | undefined;

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() title!: string;
  @Input() src!: string;

  @Input() mask!: MaskShape;

  maskClass = '';

  ngOnInit() {
    this.maskClass = this.mask ? 'mask ' + this.mask : '';
  }
}
