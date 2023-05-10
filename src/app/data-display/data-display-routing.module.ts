import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataHomeComponent } from './data-home/data-home.component';

const routes: Routes = [{ path: '', component: DataHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataDisplayRoutingModule {}
