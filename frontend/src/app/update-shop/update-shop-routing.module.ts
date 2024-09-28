import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateShopPage } from './update-shop.page';

const routes: Routes = [
  {
    path: ':id',
    component: UpdateShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateShopPageRoutingModule {}
