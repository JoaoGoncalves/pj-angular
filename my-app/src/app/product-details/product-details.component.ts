import { Component, inject, Input, input, OnChanges, OnInit, output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';
import { AsyncPipe, CommonModule, CurrencyPipe, KeyValuePipe, LowerCasePipe } from '@angular/common';
import { SortPipe } from '../sort.pipe';
import { Observable, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, LowerCasePipe, AsyncPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductDetailsComponent implements OnInit  {
  
  product$: Observable<Product> | undefined;
  private productsService = inject(ProductsService);
  //private router = inject(Router);
  private route = inject(ActivatedRoute);
  
  /* ngOnChanges(changes: SimpleChanges): void {
    this.product$ = this.productsService.getProduct(this.id()!);
  } */
  ngOnInit(): void {
    //console.log('ID: ', this.route.snapshot.paramMap.get('id'));
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => this.productsService.getProduct(Number(params.get('id'))))
    )
  }

  addToCart(){

  }

}
