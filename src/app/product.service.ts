import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:any = [];
  id =[];
  constructor( private http: HttpClient ) { 
    this.cargarProductos()
  }

  cargarProductos() {
  	this.http.get('https://products-c9266.firebaseio.com/products.json')
  	         .subscribe( (resp) => {
  	         	this.products = resp;
              this.id = Object.keys(resp);
  	         });
  }
}
