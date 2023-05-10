import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-component-display',
  templateUrl: './component-display.component.html',
  styleUrls: ['./component-display.component.scss'],
})
export class ComponentDisplayComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() code!: TemplateRef<any>;
}
