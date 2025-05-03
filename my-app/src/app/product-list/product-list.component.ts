import { Component, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailsComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  
  productDetails = viewChild(ProductDetailsComponent);
  private productsSub: Subscription | undefined;
  
  products: Product[] = [];
  selectedProduct!: Product;
  
  private productsService = inject(ProductsService);
  
  ngOnInit(): void {
    this.getproducts()
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }

  private getproducts(){
    this.productsSub = this.productsService.getProducts().subscribe(
      p => this.products = p
    )
  }

  onAdded(product: Product){
    alert(`${product.title} added to the cart.`)
  }

}