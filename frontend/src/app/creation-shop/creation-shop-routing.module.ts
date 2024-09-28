import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationShopPage } from './creation-shop.page';

const routes: Routes = [
  {
    path: '',
    component: CreationShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationShopPageRoutingModule {}
