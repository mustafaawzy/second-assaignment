import { Component } from '@angular/core';
import { products } from './Data/pd';
import { IProduct } from './Data/iProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title = 'assaignment-2';
 products=products;
  

 onAddProduct(Product:IProduct)
 {
  
   this.products.push({
    salary: Product.salary,
     name: Product.name,
     description: Product.description,
     imageUrl: Product.imageUrl
   })
 };

  
}  

