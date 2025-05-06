import { Component, DestroyRef, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { Observable, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailsComponent, SortPipe, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService],
})
//export class ProductListComponent implements OnInit, OnDestroy {
export class ProductListComponent implements OnInit {
  productDetails = viewChild(ProductDetailsComponent);
  
  //products: Product[] = [];
  products$: Observable<Product[]> | undefined;
  selectedProduct!: Product;
  
  //private productsSub :Subscription | undefined;
  
  private productsService = inject(ProductsService);
  //private destroyRef = inject(DestroyRef);
  
  ngOnInit(): void {
    this.getProducts();
  }
  /* ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  } */

  getProducts() {
    this.products$ = this.productsService
    .getProducts();
    //this.productsSub = this.productsService
    /* this.productsService
      .getProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((products) => (this.products = products)); */

  }

  onAdded(product: Product) {
    alert(`${product.title} added to the cart.`);
  }
}

//console.log(typeof ProductListComponent);
