import { Routes } from '@angular/router';

import { CategoriesComponent, CategoryComponent, GoodsListComponent, NoContentComponent } from './components';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'category/:id',
    component: CategoryComponent
  },
  {
    path: '**',
    component: NoContentComponent
  }
];