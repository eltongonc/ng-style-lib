import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyHomeComponent } from './typography-home/typography-home.component';

const routes: Routes = [{ path: '', component: TypographyHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypographyRoutingModule {}
