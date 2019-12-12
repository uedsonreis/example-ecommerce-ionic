import { Component, OnInit } from '@angular/core';
import { BASE_URL, HttpCode } from 'src/utils/constants';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { SalesOrder } from 'src/model/sales.order';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

    private salesOrders: SalesOrder[];

    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

    ngOnInit() {
        const token: string = this.route.snapshot.data['token'];
        const options = { headers: { Authorization: "Bearer "+token } };

        this.http.get(BASE_URL+'sales/order/list', options).subscribe((data: SalesOrder[]) => {
            console.log("Sales Orders are here: ", data);
            this.salesOrders = data;

        }, (error: any) => {
            console.log(error);
            if (error.status === HttpCode.FORBIDDEN) {
                alert("Você precisa logar para acessar os seus pedidos!");
                this.router.navigate(['login']);
            }
        });
    }

    private formatDate(dateText: string): string {
        const day: string = dateText.substring(8, 10);
        const month: string = dateText.substring(5, 7);
        const year: string = dateText.substring(0, 4);
        const hours: string = dateText.substring(11, 16);
        
        return day +"/"+ month +"/"+ year +" às "+ hours + "h";
    }

    private openSalesOrder(salesOrder: SalesOrder): void {
        const options: NavigationExtras = { state: { salesOrder }};
        this.router.navigate(["sales-order"], options);
    }

}