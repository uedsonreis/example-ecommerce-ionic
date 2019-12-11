import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/model/product';
import { Item } from 'src/model/item';
import { NavController } from '@ionic/angular';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.page.html',
    styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

    private product: Product;

    constructor(private route: ActivatedRoute, private router: Router, private navCtrl: NavController, private cartService: CartService) {}

    ngOnInit() {
        this.product = this.router.getCurrentNavigation().extras.state.product;
        // this.product = this.route.snapshot.data['product'];
    }

    private addToCart(): void {
        const item: Item = {
            amount: 1,
            product: this.product,
            price: this.product.price,
        };

        this.cartService.add(item);

        this.navCtrl.back();
    }

}