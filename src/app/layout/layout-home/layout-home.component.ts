import { Component } from '@angular/core';
import { TableRow } from '../../layout/table/table.component';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.scss'],
})
export class LayoutHomeComponent {
  headers: { key: keyof TableRow; label: string }[] = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name' },
    { key: 'job', label: 'Job' },
    // { key: 'color', label: 'Favorite Color' },
  ];

  rowData = [
    {
      id: 1,
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      color: 'Blue',
    },
    {
      id: 2,
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      color: 'Purple',
    },
    {
      id: 3,
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      color: 'Red',
    },
  ];
}
