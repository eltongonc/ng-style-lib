import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './settings/settings.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationHomeComponent,
    children: [
      { path: 'gallery', component: GalleryComponent },
      { path: 'settings', component: SettingsComponent },
      {
        path: '',
        component: ChatComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationRoutingModule {}
