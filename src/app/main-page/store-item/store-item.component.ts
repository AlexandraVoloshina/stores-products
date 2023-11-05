import { Component, Input } from '@angular/core';
import { IStoreItem } from '../../interfaces/store.interface';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent {

  @Input() store: IStoreItem;

  constructor(){
    this.store = {
      name: '',
      amounts: 0,
      productName: '',
      amountProduct: 0
    }
  }

}
