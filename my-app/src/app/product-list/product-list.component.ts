import { Component, DestroyRef, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailsComponent } from "../product-details/product-details.component";
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
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
  
  productDetails = viewChild(ProductDetailsComponent);
  
  products$: Observable<Product[]> | undefined;
  selectedProduct: Product | undefined;
  
  private productsService = inject(ProductsService);
  
  ngOnInit(): void {
    this.getproducts();
  }
  
  private getproducts(){
    this.products$ = this.productsService.getProducts();
  }

  onAdded(){
    alert(`${this.selectedProduct!.title} added to the cart.`)
  }

}