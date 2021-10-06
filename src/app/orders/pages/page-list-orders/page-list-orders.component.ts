import { Component, OnInit } from '@angular/core';
import { TemplateContainerComponent } from 'src/app/templates/components/template-container/template-container.component';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection$.subscribe();
  }

  ngOnInit(): void {}
}
