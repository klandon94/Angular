import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private listeners = [];
  constructor(private http: HttpClient) { }

  attach(component){
    this.listeners.push(component);
  }
  notify(){
    for (let listener of this.listeners) listener.update();
  }

  allProducts(){
    return this.http.get("/api/products");
  }
  getProduct(id){
    return this.http.get("/api/products/" + id);
  }
  addProduct(newprod){
    return this.http.post("/api/products", newprod);
  }
  editProduct(id, prod){
    return this.http.patch("/api/products/" + id, prod);
  }
  deleteProduct(id){
    return this.http.delete("/api/products/" + id);
  }

}
