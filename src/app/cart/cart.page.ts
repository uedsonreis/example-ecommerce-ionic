import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/model/item';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from 'src/utils/constants';
import { UserService } from '../services/user.service';

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
    
    invoice(): void {
        this.http.post(BASE_URL+"sales/order/invoice", this.items, { headers: { Autorization: "Bearer "+this.token }})
        .subscribe();

        // if (result.status === HTTP.BAD_REQUEST) {
        //     alert("Você precisa logar como Cliente para fechar o pedido!");
        //     this.props.navigation.navigate('Login');
        // } else if (result.status === HTTP.FORBIDDEN) {
        //     alert("Você precisa logar para fechar o pedido!");
        //     this.props.navigation.navigate('Login');
        // } else if (result.status === HTTP.OK) {
        //     cart.clear();
        //     this.props.navigation.navigate('SalesOrder');
        // } else {
        //     alert("Erro ao buscar os pedidos: "+JSON.stringify(result.data));
        // }
    }

    delete(item: Item): void {
        this.cartService.remove(item).then((items: Item[]) => {
            this.items = items;
        });
    }

}