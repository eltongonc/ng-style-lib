import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { HeroComponent } from './hero/hero.component';
import { CodeHighlightModule } from '../code-highlight/code-highlight.module';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [LayoutHomeComponent, HeroComponent, TableComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CodeHighlightModule,
    SharedModule,
  ],
})
export class LayoutModule {}
