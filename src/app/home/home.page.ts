import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from '../../utils/constants';
import { Product } from 'src/model/product';
import { Router, NavigationExtras } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private products: Product[];

    constructor(private http: HttpClient, private router: Router, private dataService: CartService) {}

    ionViewWillEnter(): void {
        this.http.get(BASE_URL+"product/list").subscribe((data: Product[]) => {
            this.products = data;
            console.log("Products are here: "+ this.products);
        }, (error: any) => {
            alert("Ocorreu um erro ao buscar os produtos: "+error.message);
        });
    }

    private openProductScreen(product: Product): void {
        const options: NavigationExtras = { state: { product }};
        this.router.navigate(["product"], options);

        // const id: string = product.id.toString();
        // this.dataService.set(id, product);
        // this.router.navigateByUrl('/product/'+id);
    }

}