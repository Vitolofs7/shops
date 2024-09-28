import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  shops: Array<any> = [
    {
      address: "c/ Luján Pérez",
      telephone: "923883321"
    },
    {
      address: "c/ José Vélez",
      telephone: "923882521"
    },
    {
      address: "c/ Juan Rejón",
      telephone: "923883211"
    },
  ]

  constructor(private router:Router) {} // La variable se declara antes que el tipo

  goToShopList(){
    this.router.navigateByUrl("/shop-list"); // el this es porque la variable pertenece a esta clase
  }

  goToCreateShop(){
    this.router.navigateByUrl("/creation-shop");
  }
}
