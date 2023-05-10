import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsHomeComponent } from './actions-home/actions-home.component';

const routes: Routes = [{ path: '', component: ActionsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionsRoutingModule {}
