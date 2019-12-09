import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from '../../utils/constants';
import { Product } from 'src/model/product';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private products: Product[];

    constructor(private http: HttpClient) {}

    ionViewWillEnter(): void {
        this.http.get(BASE_URL+"product/list").subscribe((data: Product[]) => {
            this.products = data;
            console.log("Products are here: "+ this.products);
        }, (error: any) => {
            alert("Ocorreu um erro ao buscar os produtos: "+error.message);
        });
    }

    private openProductScreen(product: Product): void {
        alert("Open "+ product.name +" product.");
    }

}