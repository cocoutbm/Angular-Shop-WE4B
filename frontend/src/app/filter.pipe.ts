import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';
import { ProductListComponent } from './product-list/product-list.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(productList: Product[], filter: (product: any) => boolean): any { // For each ??
    if (!productList || !filter) {
        return productList;
      }
    return productList.filter(product => filter(product));
  }
}
