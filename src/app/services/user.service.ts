import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private static readonly LOGGED: string = "logged";
    private static readonly TOKEN: string = "token";

    constructor(private storage: Storage) {}

    public login(username: string, token: string): void {
        this.storage.set(UserService.LOGGED, username);
        this.storage.set(UserService.TOKEN, token);
    }

    public async getToken(): Promise<string> {
        return this.storage.get(UserService.TOKEN);
    }

    public async getLoggedUser(): Promise<string> {
        return this.storage.get(UserService.LOGGED);
    }

    public logout(): void {
        this.storage.remove(UserService.LOGGED);
        this.storage.remove(UserService.TOKEN);
    }

}