import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { PageMapModule } from './page-map/page-map.module';

const routes: Routes = [
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then(m => HomePageModule),
  },
  {
    path: 'page-map',
    loadChildren: () => import('./page-map/page-map.module').then(m => PageMapModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
