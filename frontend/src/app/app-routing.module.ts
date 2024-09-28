import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'shop-list',
    loadChildren: () => import('./shop-list/shop-list.module').then( m => m.ShopListPageModule)
  },
  {
    path: 'creation-shop',
    loadChildren: () => import('./creation-shop/creation-shop.module').then( m => m.CreationShopPageModule)
  },
  {
    path: 'update-shop',
    loadChildren: () => import('./update-shop/update-shop.module').then( m => m.UpdateShopPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
