import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Item } from 'src/model/item';
import { Product } from 'src/model/product';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private static readonly CART_ID: string = "CART";

    constructor(private storage: Storage) {}

    public async get(): Promise<Item[]> {
        const value = await this.storage.get(CartService.CART_ID);
        if (value !== undefined && value !== null) {
            return JSON.parse(value) as Array<Item>;
        } else {
            return new Array<Item>();
        }
    }

    public async add(item: Item): Promise<void> {
        const items: Item[] = await this.get();

        const itemSaved: Item = this.getItem(items, item.product);
        if (itemSaved) this.removeItem(items, itemSaved);
        
        if (itemSaved !== undefined && itemSaved !== null) {
            itemSaved.amount = itemSaved.amount + item.amount;
            items.push(itemSaved);
        } else {
            items.push(item);
        }    
        this.storage.set(CartService.CART_ID, JSON.stringify(items));
    }

    public async remove(item: Item): Promise<Item[]> {
        const items: Item[] = await this.get();
        const itemSaved: Item = this.getItem(items, item.product);

        this.removeItem(items, itemSaved);
        this.storage.set(CartService.CART_ID, JSON.stringify(items));
        
        return items;
    }

    public async clear(): Promise<void> {
        await this.storage.remove(CartService.CART_ID);
    }

    private getItem(items: Item[], product: Product): Item {
        return items.find((item: Item) => item.product.id === product.id);
    }

    private removeItem(items: Item[], item: Item): void {
        items.splice(items.indexOf(item), 1);
    }
    
}