import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public myTitle: string = 'list orders';
  public collection$!: Observable<Order[]>;
  public headers = [
    'Type',
    'Client',
    'NbJours',
    'TjmHT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  constructor(private ordersService: OrdersService) {
    this.collection$ = this.ordersService.collection$;
  }

  ngOnInit(): void {}

  public changeTitle() {
    this.myTitle = 'My list of orders';
  }
}
