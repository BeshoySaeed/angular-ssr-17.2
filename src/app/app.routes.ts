import { Routes } from '@angular/router';
import { HomeComponent } from './share/components/home/home.component';
import { NotFoundComponent } from './share/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
