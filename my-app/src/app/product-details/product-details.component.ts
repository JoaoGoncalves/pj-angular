import { Component, inject, Input, input, OnChanges, OnInit, output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';
import { AsyncPipe, CommonModule, CurrencyPipe, KeyValuePipe, LowerCasePipe } from '@angular/common';
import { SortPipe } from '../sort.pipe';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, LowerCasePipe, AsyncPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  /* inputs: ['product'] */
})
export class ProductDetailsComponent implements OnChanges  {

  id      = input<number>();
  added   = output();

  product$: Observable<Product> | undefined;
  private productsService = inject(ProductsService);

  ngOnChanges(changes: SimpleChanges): void {
    this.product$ = this.productsService.getProduct(this.id()!);
  }

  addToCart(){
    this.added.emit();
  }

}
