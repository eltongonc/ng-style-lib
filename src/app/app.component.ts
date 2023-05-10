import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-style-lib';

  routes = [
    { url: 'actions', label: 'Actions' },
    { url: 'data-display', label: 'Data Display' },
    { url: 'navigation', label: 'Navigation' },
    { url: 'layouts', label: 'Layouts' },
    { url: 'typography', label: 'Typography' },
  ];
}
