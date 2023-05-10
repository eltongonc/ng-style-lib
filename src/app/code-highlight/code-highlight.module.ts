import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';

import { CodeHighlighterComponent } from './code-highlighter/code-highlighter.component';

@NgModule({
  declarations: [CodeHighlighterComponent],
  imports: [CommonModule, HighlightModule],
  exports: [CodeHighlighterComponent],
  providers: [],
})
export class CodeHighlightModule {}
