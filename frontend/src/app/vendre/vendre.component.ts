import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.css']
})
export class VendreComponent implements OnInit{
  product !: Product
  public brand!: Brand[]
  public category!: Category[]

  constructor(private productService: ProductService, private brandService: BrandService, private router: Router, private categoryService : CategoryService) {
    this.product = new Product(this.productService.list_length + 1, "", "", "", "", "", 0, 0)
    this.brandService.getData().subscribe(data=>{
      this.brand= data
    })

    this.categoryService.getData().subscribe(data=>{
      this.category= data
    })

  }

  ngOnInit(): void {
      this.productService.getDataLength()
  }

  addProduct(): void{
    this.product.image = this.product.image.replace("C:\\fakepath\\", "../assets/images-produits/")
    this.productService.addProduct(this.product).subscribe(data => {
      this.product = data
    })

    if(!this.brand.values.name.includes(this.product.brand)){
      let newBrand= new Brand(this.brandService.list_length+1, this.product.brand)
      this.brandService.addBrand(newBrand).subscribe(data=>{
        newBrand= data
      })
    }

    if(!this.category.values.name.includes(this.product.category)){
      let newCategory= new Category(this.categoryService.list_length+1, this.product.category)
      this.categoryService.addCategory(newCategory).subscribe(data=>{
        newCategory= data
      })
    }

    this.router.navigateByUrl('/')

  }
  
}
