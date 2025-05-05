import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailsComponent},
    /* {path: 'cart', component: CartComponent}, */
    {
        path: 'cart',
        loadComponent: ()=> import('./cart/cart.component').then(c => c.CartComponent) 
    },
    {path: '**', component: PageNotFoundComponent},
];
