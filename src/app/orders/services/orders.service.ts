import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  public collection$: Observable<Order[]>;
  public urlApi = environment.urlApi;
  constructor(private httpClient: HttpClient) {
    console.log('service orders instanced');
    this.collection$ = this.httpClient
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(
        map((data) => {
          return data.map((obj) => {
            return new Order(obj);
          });
        })
      );
  }
}
