import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService] // Service ProductService dans le composant
})
export class ProductListComponent implements OnInit {
  searchText:any;
  products: Product[] = [];
  brands : Brand[] = [];
  visible: boolean = true;

  constructor(private productService: ProductService, private brandService: BrandService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })

    this.brandService.getData().subscribe(data => {
      this.brands = data;
    })
  }

  ngOnInit() {
  }

  addToCart(product: Product) {
    console.log('Produit ajouté au panier :', product);
  }

  FilterbyBrand(brand: Brand) {
    if(brand.name!= 'ALL')
      this.productService.getDatabyBrand(brand).subscribe(data=>{
      this.products = data;
      }
    )
    else
      this.productService.getProducts().subscribe(data=>{
      this.products= data;
      }
    )
  }

  Afficher(){
    if(this.visible){
      this.visible= false;
    } else {
      this.visible = true;
    }
  }
}
