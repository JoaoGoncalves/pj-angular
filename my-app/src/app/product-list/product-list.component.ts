import { Component, DestroyRef, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailsComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
  
  productDetails = viewChild(ProductDetailsComponent);
  
  products: Product[] = [];
  selectedProduct!: Product;
  
  private productsService = inject(ProductsService);
  private destroyRef = inject(DestroyRef);
  
  ngOnInit(): void {
    this.getproducts()
  }

  

  private getproducts(){
    this.productsService.getProducts()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(
      p => this.products = p
    )
  }

  onAdded(product: Product){
    alert(`${product.title} added to the cart.`)
  }

}