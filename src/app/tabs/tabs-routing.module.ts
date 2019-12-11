import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CartResolverService } from '../resolver/cart-resolver.service';
import { UserResolverService } from '../resolver/user-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        resolve: { items: CartResolverService, token: UserResolverService },
                        loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/tab1',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}