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
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
    }, {
        path: 'product',
        // path: 'product/:id',
        loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
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