import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  endPoint: string = "http://localhost:8080/api/shops"; // Define el endpoint base

  constructor(private httpClient: HttpClient) { }

  // Obtener todas las tiendas
  getAll() {
    return this.httpClient.get(this.endPoint); // Obtener todas las tiendas
  }

  // Eliminar una tienda por ID
  delete(id: any) {
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }

  // Actualizar una tienda por ID
  update(id: any, shopData: any) {
    return this.httpClient.put(`${this.endPoint}/${id}`, shopData);
}

  // Crear una nueva tienda
  create(shop: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("address", shop.address);
    body.append("telephone", shop.telephone);

    return this.httpClient.post(this.endPoint, body.toString(), { headers }); // Crear tienda con datos codificados
  }

  // Obtener una tienda por ID
  getShopById(id: any) {
    return this.httpClient.get(`${this.endPoint}/${id}`);
  }
}
