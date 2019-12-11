import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    }, {
        path: 'product',
        loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
    }, {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
    }, {
        path: 'sales-order',
        loadChildren: () => import('./sales-order/sales-order.module').then(m => m.SalesOrderPageModule)
    }, {
        path: 'login',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}