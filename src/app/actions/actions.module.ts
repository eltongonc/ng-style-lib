import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionsRoutingModule } from './actions-routing.module';
import { ActionsHomeComponent } from './actions-home/actions-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ActionsHomeComponent, ModalComponent],
  imports: [CommonModule, ActionsRoutingModule, SharedModule],
})
export class ActionsModule {}
