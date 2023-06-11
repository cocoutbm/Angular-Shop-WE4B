import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.css']
})
export class VendreComponent {
  title = 'Proposer un article à vendre';
  productName = '';
  product !: Product

  constructor(private productService: ProductService) {}

  
}
