import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class UserResolverService {

    constructor(private dataService: UserService) {}

    public async resolve(route: ActivatedRouteSnapshot): Promise<string> {
        // const id: string = route.paramMap.get('id');
        // return this.dataService.get(id);
        return await this.dataService.getToken();
    }

}