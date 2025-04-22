import { Component, inject, OnInit, viewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';

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
  
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onAdded(product: Product){
    alert(`${product.title} added to the cart.`)
  }

}


//console.log(typeof ProductListComponent);