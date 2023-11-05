import { Component, OnInit } from '@angular/core';
import { IStore, IProducts } from '../interfaces/store.interface';
import storesData from '../../assets/stores.json';
import productData from '../../assets/products.json';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  stores: IStore[] = []; 
  products: IProducts[] = [];

  storesArray: Array<any> = [];

  constructor(){}

  ngOnInit() {
    
    this.stores = storesData;
    this.products = productData;

    console.log('store', this.stores);

    this.storesArray = this.getStoresArray(this.stores);

    console.log('this.storesArray', this.storesArray);

  }

  private getStoresArray(arr: any){
    return this.stores.map(item => {

      let amounts = item.products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        0,
      );

      let minValue = item.products.reduce((previous, current) => {
        return current.amount < previous.amount ? current : previous;
      });

      return {
        name: item.name,
        amounts: amounts,
        productName: this.products.find(item => item.id === minValue.id)?.name,
        amountProduct: minValue.amount
      }
    });
  }

  setStore(e: any){
    this.stores.push(e);
    this.storesArray = this.getStoresArray(this.stores);
    console.log('this.storesArray', this.stores);
  }

}
