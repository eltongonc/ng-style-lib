import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-home',
  templateUrl: './navigation-home.component.html',
  styleUrls: ['./navigation-home.component.scss'],
})
export class NavigationHomeComponent {
  tabsNav = [
    { url: './', label: 'Chat' },
    { url: './gallery', label: 'Gallery' },
    { url: './settings', label: 'Settings' },
  ];
}
