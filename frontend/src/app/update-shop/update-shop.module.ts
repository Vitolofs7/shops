import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateShopPageRoutingModule } from './update-shop-routing.module';

import { UpdateShopPage } from './update-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateShopPageRoutingModule
  ],
  declarations: [UpdateShopPage]
})
export class UpdateShopPageModule {}
