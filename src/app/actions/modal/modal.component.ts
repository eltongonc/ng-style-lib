import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(private el: ElementRef) {}

  @Input() modalOpen = false;

  @Output() onClose = new EventEmitter();

  closeModal() {
    this.onClose.emit();
  }

  handelOk() {
    this.closeModal();
  }

  handleCancel() {
    this.closeModal();
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }
}
