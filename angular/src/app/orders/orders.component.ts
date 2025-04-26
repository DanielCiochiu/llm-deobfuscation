import { Component } from '@angular/core';
import { AppService } from '../services/app.service';
import { OrdersViewProps } from '../../../../vanilla';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent {
    props: OrdersViewProps;
    orders: any[] = [];

    constructor(private appService: AppService) {}

    async ngOnInit() {
        this.orders = await this.appService.getOrders();
    }
}
