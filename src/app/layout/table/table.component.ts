import { Component, Input } from '@angular/core';

export interface TableRow {
  id: number;
  name: string;
  job: string;
  color: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() classNames: string = '';

  @Input() headers: { key: keyof TableRow; label: string }[] = [];
  @Input() rowData: TableRow[] = [];
}
