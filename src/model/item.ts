import { Product } from "./product";
import { SalesOrder } from "./sales.order";

export class Item {

    public id?: number;
    public price?: number;
    public amount?: number;

    public product?: Product;
    public salesOrder?: SalesOrder;
}