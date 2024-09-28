import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationShopPageRoutingModule } from './creation-shop-routing.module';

import { CreationShopPage } from './creation-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreationShopPageRoutingModule
  ],
  declarations: [CreationShopPage]
})
export class CreationShopPageModule {}
