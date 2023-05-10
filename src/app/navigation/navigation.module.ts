import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { TabsComponent } from './tabs/tabs.component';
import { ChatComponent } from './chat/chat.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavigationHomeComponent,
    TabsComponent,
    ChatComponent,
    GalleryComponent,
    SettingsComponent,
  ],
  imports: [CommonModule, NavigationRoutingModule, SharedModule],
})
export class NavigationModule {}
