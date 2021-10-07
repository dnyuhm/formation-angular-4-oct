import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
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
  public states = Object.values(StateOrder);
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
    console.log(this.states);
  }

  ngOnInit(): void {}

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    console.log(event.target.value);
    this.ordersService.changeState(item, state).subscribe((data) => item = data);
  }

  public changeTitle() {
    this.myTitle = 'My list of orders';
  }
}
