import { Component, Input } from '@angular/core';

// should be primary, secondary etc.
type Color =
  | '#66CC8A'
  | '#377CFB'
  | '#EA5234'
  | '#FBBD23'
  | '#F87272'
  | '36D399'
  | string;

@Component({
  selector: 'app-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss'],
})
export class BlockquoteComponent {
  @Input() cite!: string;

  @Input() color: Color = '#66CC8A';

  fillColor = `fill: ${this.color}`;
}
