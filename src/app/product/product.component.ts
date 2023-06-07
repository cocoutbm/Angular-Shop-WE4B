import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/classes/Product';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!:Product
  @Input() prd_index! : number



  constructor(private router : Router, private service :ProductService) { }

     decrement(event_var : Event){
          if (this.product.likes > 0)
                this.product.likes -=1;
          console.log(event_var);
          this.service.updateproduct(this.product).subscribe(
            data => {
              this.product = data
            }
          )
       }

       increment(){
        this.product.likes +=1 
        this.service.updateproduct(this.product).subscribe(
          data=>{
            this.product = data 
          }
        )
       }

       readMore(){
        this.router.navigate(['/', 'products', this.prd_index])
       }
    

  ngOnInit(): void {

  }

}
