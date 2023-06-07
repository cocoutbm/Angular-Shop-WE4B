import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/classes/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productfull',
  templateUrl: './productfull.component.html',
  styleUrls: ['./productfull.component.css']
})
export class ProductfullComponent implements OnInit {
  public prd_idx : number
  public product : Product

     constructor(private activatedroute : ActivatedRoute, private service : ProductService) { 

          this.prd_idx = parseInt(this.activatedroute.snapshot.paramMap.get('lab') || '0') 
          this.product = service.getPrdByIndex(this.prd_idx-1)
             
       }
    

  ngOnInit(): void {
  }

}
