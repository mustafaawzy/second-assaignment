import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../Data/iProduct';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  newPName:string="";
  newPSalary:number=0;
  newPdescribtion:string="";
  productImage:string = 'https://w7.pngwing.com/pngs/204/549/png-transparent-apple-watch-smartwatch-wearable-technology-apple-products-electronics-gadget-company.png';
@Output() products = new EventEmitter<IProduct>()

onAdd() {
 

  this.products.emit({
    name: this.newPName,
    description: this.newPdescribtion,
    salary: this.newPSalary,
    imageUrl:this.productImage,
  });
 
}

}
