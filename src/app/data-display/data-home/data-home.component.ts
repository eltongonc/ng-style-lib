import { Component } from '@angular/core';
import { MaskShape } from '../image/image.component';

export type ImageType = {
  src: string;
  title: string;
  mask?: MaskShape;
};

@Component({
  selector: 'app-data-home',
  templateUrl: './data-home.component.html',
  styleUrls: ['./data-home.component.scss'],
})
export class DataHomeComponent {
  images: ImageType[] = [
    {
      src: '/assets/images/pina-colada.jpg',
      title: 'Pinã Colada Normal',
    },
    {
      src: '/assets/images/pina-colada.jpg',
      title: 'Pinã Colada Squircle shaped',
      mask: 'mask-squircle',
    },
    {
      src: '/assets/images/pina-colada.jpg',
      title: 'Pinã Colada Heart shaped',
      mask: 'mask-heart',
    },
    {
      src: '/assets/images/pina-colada.jpg',
      title: 'Pinã Colada Star shaped',
      mask: 'mask-star-2',
    },
  ];
}
