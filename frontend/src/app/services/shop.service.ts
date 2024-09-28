import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  endPoint: string = "http://localhost:8080/api/shops";

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(this.endPoint); // Podemos poner el then (asincrona), o tratar en el error donde llamamos
  }

  delete(id: any){
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }

  /* update(id: any, shop: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("address", shop.address);
    body.append("telephone", shop.telephone);

    return this.httpClient.put(`${this.endPoint}/${id}`, body.toString(), { headers });
  } */

  create(shop: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("address", shop.address);
    body.append("telephone", shop.telephone);

    return this.httpClient.post(this.endPoint, body.toString(), { headers }); // endPoint en el pdf es serverUrl
  }

  getShopById(id: any){
    return this.httpClient.get(`${this.endPoint}/${id}`);
  }

}
