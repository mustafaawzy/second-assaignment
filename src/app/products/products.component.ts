import { Component, Input } from '@angular/core';
import { IProduct } from '../Data/iProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
@Input({required:true}) product:IProduct;

}
 