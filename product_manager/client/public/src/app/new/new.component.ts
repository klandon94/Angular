import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;
  errors = [];

  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit() {
    this.newProduct = {title: "", price: "", image: ""};
  }

  create(){
    this.ps.addProduct(this.newProduct).subscribe(data=>{
      if (data['error']){
        this.errors = [];
        for (let i in data['error']['errors']) this.errors.push(data['error']['errors'][i].message);
        return;
      }
      else{
        this.errors = [];
        this.newProduct =  {title: "", price: "", image: ""};
        this.ps.notify();
        this.router.navigateByUrl("/products");
      }
    });
  }

  goToProducts(){
    this.router.navigateByUrl("/products");
  }

}
