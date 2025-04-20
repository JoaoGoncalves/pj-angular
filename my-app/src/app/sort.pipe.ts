import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Product[], ...args: any[]): Product[] {
    if(value){
      return value.sort( (a: Product, b: Product) => ( 
        (a.title < b.title) ? -1 : 1
       ))
    }
    return [];
  }

}
