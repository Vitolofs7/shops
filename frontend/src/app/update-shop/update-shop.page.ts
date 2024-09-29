import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-update-shop',
  templateUrl: './update-shop.page.html',
  styleUrls: ['./update-shop.page.scss'],
})
export class UpdateShopPage implements OnInit {
  shop: any = {}; // Objeto para almacenar los datos de la tienda

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener el ID de la tienda de la URL
    console.log('ID de la tienda:', id); // Verificar que el ID es válido
    if (id) {
      this.loadShop(id);
    } else {
      console.error("ID no válido o no proporcionado.");
    }
  }

  loadShop(id: string) {
    this.shopService.getShopById(id).subscribe(
      (data: any) => { // Añadir tipo explícito
        this.shop = data;
      },
      (error: any) => { // Añadir tipo explícito
        console.error('Error al cargar los datos de la tienda:', error);
      }
    );
  }

  updateShop() {
    console.log('Datos de la tienda a actualizar:', this.shop); // Verificar el contenido
    this.shopService.update(this.shop.id, this.shop).subscribe(
        (response: any) => {
            console.log('Tienda actualizada exitosamente:', response);
            this.router.navigate(['/shop-list']);
        },
        (error: any) => {
            console.error('Error al actualizar la tienda:', error);
        }
    );
}

}
