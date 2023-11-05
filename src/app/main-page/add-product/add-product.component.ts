import { Component, Input, Output, EventEmitter, Inject} from '@angular/core';
import { IProducts } from '../../interfaces/store.interface';
import { AddStoreComponent } from '../add-store/add-store.component';
import productData from '../../../assets/products.json';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  products: IProducts[] = [];
  public unique_key: number = 0;
  public parentRef: AddStoreComponent;

  amount: number = 0;
  productName: string = '';

  @Output() addProductEvent = new EventEmitter();

  constructor(){
    this.products = productData;
  }

  removeProduct(){
    this.parentRef.remove(this.unique_key);
  }

  onSelected(e: any){
    this.productName = e.currentTarget.value;
  }

  getInputValue(value: any){
    let product = {
      productName: this.products.find(item => item.name === this.productName)?.id,
      amount: value
    }
    this.parentRef.setProduct(this.unique_key, product);
  }

}
