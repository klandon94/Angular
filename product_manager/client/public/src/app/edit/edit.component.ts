import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct:any;
  product: any;
  errors = [];

  constructor(private ps: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ps.getProduct(this.route.params['_value']['id']).subscribe(data=>{
      this.product = data;
      this.editProduct = {title: this.product.title, price: this.product.price, image: this.product.image};
    })
  }

  updateProduct(id){
    this.ps.editProduct(id, this.editProduct).subscribe(data=>{
      console.log(data);
      if (data['error']){
        this.errors = [];
        for (let i in data['error']['errors']) this.errors.push(data['error']['errors'][i].message);
        return;
      }
      else{
        this.errors = [];
        this.editProduct =  {title: "", price: "", image: ""};
        this.ps.notify();
        this.router.navigateByUrl("/products");
      }
    })
  }

  goToProducts(){
    this.router.navigateByUrl("/products");
  }

  removeProduct(id){
    this.ps.deleteProduct(id).subscribe(data=>{
      this.ps.notify();
      this.router.navigateByUrl("/products");
    })
  }

}
