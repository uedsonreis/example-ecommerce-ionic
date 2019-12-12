import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesOrder } from 'src/model/sales.order';
import { Item } from 'src/model/item';

@Component({
    selector: 'app-sales-order',
    templateUrl: './sales-order.page.html',
    styleUrls: ['./sales-order.page.scss'],
})
export class SalesOrderPage implements OnInit {

    private salesOrder: SalesOrder;
    private total: number;

    constructor(private router: Router) {}

    ngOnInit() {
        this.salesOrder = this.router.getCurrentNavigation().extras.state.salesOrder;

        let total: number = 0.0;
        this.salesOrder.items.forEach((item: Item) => {
            total += item.price * item.amount;
        });
        this.total = total;
    }

}