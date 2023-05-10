import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'data-display',
    loadChildren: () =>
      import('./data-display/data-display.module').then(
        ({ DataDisplayModule }) => DataDisplayModule
      ),
  },
  {
    path: 'actions',
    loadChildren: () =>
      import('./actions/actions.module').then(
        ({ ActionsModule }) => ActionsModule
      ),
  },
  {
    path: 'navigation',
    loadChildren: () =>
      import('./navigation/navigation.module').then(
        ({ NavigationModule }) => NavigationModule
      ),
  },
  {
    path: 'layouts',
    loadChildren: () =>
      import('./layout/layout.module').then(({ LayoutModule }) => LayoutModule),
  },
  {
    path: 'typography',
    loadChildren: () =>
      import('./typography/typography.module').then(
        ({ TypographyModule }) => TypographyModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
