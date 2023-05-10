import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-highlighter',
  templateUrl: './code-highlighter.component.html',
  styleUrls: ['./code-highlighter.component.scss'],
})
export class CodeHighlighterComponent {
  @Input() code!: string;
  languages = ['html', 'xml', 'typescript'];
}
