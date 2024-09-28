import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {

  shops: any = []; // Creanis la variable que va a guardar un array de elementos cualquiera

  constructor(private shopService: ShopService,
    private router: Router
  ) { } // Importamos el servicio que creamos antes

  // Cada vez que cambie algo en la página, realiza la llamada a la función getAllShop()
  ngOnInit() {
    this.getAllShops();
  }

  /*Existen dos maneras de manejar las llamadas asincronas, con promesas
  y con suscripciones - Te suscribes al servicio que te devuelve todas las
  tiendas, y en algún momento te llega, y el programa continúa*/
  getAllShops(){
    this.shopService.getAll().subscribe(data => {
      console.log("Llegaron los datos.")
      console.log(data)
      this.shops = data;
    })
  }

  deleteThis(id: any){
    this.shopService.delete(id).subscribe(res => {
      this.getAllShops();
      console.log("Se ha borrado.")
    })
  }

  /* updateThis(id: any){
    this.router.navigate(['/update-shop', id]); // el this es porque la variable pertenece a esta clase
  } */
    goHome(){
      this.router.navigateByUrl("/");
    }



}
