import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/model/item';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';

import { BASE_URL, HttpCode } from 'src/utils/constants';
import { SalesOrder } from 'src/model/sales.order';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

    private token: string;
    private items: Item[];
    private total: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cartService: CartService,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.items = this.route.snapshot.data['items'];
        this.token = this.route.snapshot.data['token'];

        let total: number = 0.0;
        this.items.forEach((item: Item) => {
            total += item.price * item.amount;
        });
        this.total = total;
    }
    
    private invoice(): void {
        if (this.isEmpty()) return;

        const options = {
            headers: { Authorization: "Bearer "+this.token }
        };

        this.http.post(BASE_URL+"sales/order/invoice", this.items, options)
        .subscribe((data: SalesOrder) => {
            console.log(data);
            this.cartService.clear();
            this.router.navigate(['list']);

        }, (error: any) => {
            console.error(error);
            if (error.status === HttpCode.BAD_REQUEST) {
                alert(error.error);
                this.router.navigate(['login']);
            } else if (error.status === HttpCode.FORBIDDEN) {
                alert("Você precisa logar para fechar o pedido!");
                this.router.navigate(['login']);
            } else {
                alert("Erro ao buscar os pedidos: "+error.error);
            }
        });
    }

    private isEmpty(): boolean {
        return (this.items.length <= 0);
    }

    private delete(item: Item): void {
        this.cartService.remove(item).then((items: Item[]) => {
            this.items = items;
        });
    }

}