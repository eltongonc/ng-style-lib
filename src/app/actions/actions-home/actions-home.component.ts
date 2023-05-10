import { Component } from '@angular/core';

@Component({
  selector: 'app-actions-home',
  templateUrl: './actions-home.component.html',
  styleUrls: ['./actions-home.component.scss'],
})
export class ActionsHomeComponent {
  modalOpen = false;

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
