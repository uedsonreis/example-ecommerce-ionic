import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Item } from 'src/model/item';

@Injectable({
    providedIn: 'root'
})
export class CartResolverService implements Resolve<any> {

    constructor(private dataService: CartService) {}

    public async resolve(route: ActivatedRouteSnapshot): Promise<Item[]> {
        // const id: string = route.paramMap.get('id');
        // return this.dataService.get(id);
        return await this.dataService.get();
    }

}