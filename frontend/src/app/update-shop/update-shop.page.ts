import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-shop',
  templateUrl: './update-shop.page.html',
  styleUrls: ['./update-shop.page.scss'],
})
export class UpdateShopPage implements OnInit {

 /*  shopId: any;
  shop: any = { address: '', telephone: ''}; */
  

  constructor() { }

  ngOnInit() {

    /* // Recupero la id desde la URL y la guardo en la variable shopId
    this.shopId = this.route.snapshot.paramMap.get('id');

    this.shopService.getShopById(this.shopId).subscribe(
      (data: any) => {
        this.shop = data;
      },
      (error) => {
        console.error('Error fetching shop data', error);
      }
    );
  } */

  /* updateShop() {
    this.shopService.update(this.shopId, this.shop).subscribe(
      (response) => {
        console.log('Shop updated successfully', response);
      },
      (error) => {
        console.error('Error updating shop: ', error);
      }
    );
  } */
}}
