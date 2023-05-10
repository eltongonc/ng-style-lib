import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyHomeComponent } from './typography-home/typography-home.component';
import { CodeHighlightModule } from '../code-highlight/code-highlight.module';
import { SharedModule } from '../shared/shared.module';
import { BlockquoteComponent } from './blockquote/blockquote.component';

@NgModule({
  declarations: [TypographyHomeComponent, BlockquoteComponent],
  imports: [
    CommonModule,
    TypographyRoutingModule,
    CodeHighlightModule,
    SharedModule,
  ],
})
export class TypographyModule {}
