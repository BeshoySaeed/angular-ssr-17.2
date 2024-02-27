import { Routes } from '@angular/router';
import { NotFoundComponent } from './share/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./share/components/home/home.component').then((m) => {
            console.log('import home component');
            return m.HomeComponent;
          }),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./share/components/card/card.component').then((m) => {
            console.log('import card component');
            return m.CardComponent;
          }),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
