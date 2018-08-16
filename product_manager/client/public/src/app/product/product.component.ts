import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product;
  @Output() taskEmitter = new EventEmitter();

  constructor(private ps: ProductService) { }

  ngOnInit() {
  }

  deleteProduct(id){
    this.ps.deleteProduct(id).subscribe(data=>{
      this.taskEmitter.emit();
    });
  }

}
