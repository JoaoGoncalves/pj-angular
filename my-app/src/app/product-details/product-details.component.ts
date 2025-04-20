import { Component, Input, input, OnChanges, OnInit, output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';
import { CommonModule, CurrencyPipe, KeyValuePipe, LowerCasePipe } from '@angular/common';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, KeyValuePipe, LowerCasePipe, SortPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  /* inputs: ['product'] */
})
export class ProductDetailsComponent  {

  product = input<Product>();

  added = output<Product>();

  addToCart(){
    this.added.emit(this.product()!);
  }

}
