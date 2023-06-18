import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';


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
  categorys : Category[] = [];
  selectedBrand!: Brand;
  selectedCategory!: Category;
  visibleBrd: boolean = true;
  visibleCat: boolean = true;

  constructor(private productService: ProductService, private brandService: BrandService, private categoryService: CategoryService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })

    this.brandService.getData().subscribe(data => {
      this.brands = data;
      this.selectedBrand = data[0];
    })

    this.categoryService.getData().subscribe(data => {
      this.categorys = data;
      this.selectedCategory = data[0];
    })
  }

  ngOnInit() {
  }

  addToCart(product: Product) {
    console.log('Produit ajouté au panier :', product);
  }

  FilterbyBrand(brand: Brand) {
    this.selectedBrand = brand;
    this.productService.getDatabyFilter(brand,this.selectedCategory).subscribe(data=>{
    this.products = data;
    })
  }

  FilterbyCategory(category: Category) {
    this.selectedCategory = category;
    this.productService.getDatabyFilter(this.selectedBrand,category).subscribe(data=>{
    this.products = data;
    })
  
  }

  AfficherFiltreBrand(){
    if(this.visibleBrd){
      this.visibleBrd= false;
    } else {
      this.visibleBrd = true;
    }
  }

  AfficherFiltreCategory(){
    if(this.visibleCat){
      this.visibleCat= false;
    } else {
      this.visibleCat = true;
    }
  }
}
