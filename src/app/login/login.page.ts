import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { Customer } from 'src/model/customer';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BASE_URL } from '../../utils/constants';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private static readonly SIGNUP: string = "signup";

    private isSignup: boolean = false;

    private user: User;
    private customer: Customer;
    private confirmPassword: string = "";

    constructor(private http: HttpClient, private userService: UserService, private router: Router) {}

    ngOnInit() {
        this.user = new User();
        this.customer = new Customer();
    }

    private signup(): void {
        if (!this.validateForm()) return;

        this.user.login = this.customer.email;
        this.customer.user = this.user;
        
        const body = {
            ...this.customer,
            userPassword: this.customer.user.password
        };

        this.http.post(BASE_URL+'user/customer/add', body, { responseType: "text" })
        .subscribe(this.successCallback, (error: any) => alert(error.error));
    }

    private login(): void {
        this.http.post(BASE_URL+"user/login", this.user, { responseType: "text" })
        .subscribe(this.successCallback, (error: any) => alert("Email / Senha inválido(a)!"));
    }

    private successCallback = (token: string) => {
        this.userService.login(this.user.login, token).then(() => {
            this.router.navigate(['home/tab2']);
        });
    };

    private validateForm(): boolean {
        if (this.customer.email === undefined || this.customer.email.trim() === '') {
            alert("Este email é inválido!");
            return false;
        }
        if (!this.customer.email.includes("@") || !this.customer.email.includes(".")) {
            alert("Este email é inválido!");
            return false;
        }
        if (this.customer.age === undefined || this.customer.age <= 0) {
            alert("Esta idade não é permitida!");
            return false;
        }
        if (this.user.password !== this.confirmPassword) {
            alert("As senhas não conferem!");
            return false;
        }
        return true;
    }

    private segmentChanged(event: CustomEvent): void {
        if (event.detail.value === LoginPage.SIGNUP) {
            this.isSignup = true;
        } else {
            this.isSignup = false;
        }
    }

}