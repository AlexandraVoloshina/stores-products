import { 
  Component, 
  Input, 
  ViewChild, 
  ViewContainerRef, 
  ComponentRef, 
  ComponentFactoryResolver, 
  Output, 
  EventEmitter 
} from '@angular/core';
import { IProducts } from '../../interfaces/store.interface';
import { AddProductComponent } from '../add-product/add-product.component'

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss']
})
export class AddStoreComponent {

  @Input() products: IProducts[] = [];
  @Output() addStoreEvent = new EventEmitter();

  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;

  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<AddProductComponent>>();

  productArray: any = [];
  invalidName: boolean = false;
  storeName: string = '';

  constructor(private CFR: ComponentFactoryResolver) {
    this.productArray = [{
      productName: 1,
      amount: 0
      }
    ];
  }

  onSelected(e: any){
    this.productArray[0].productName = e.currentTarget.value;
  }

  getInputValue(value: any){
    this.productArray[0].amount = +value;
  }

  addProduct() {
    let componentFactory = this.CFR.resolveComponentFactory(AddProductComponent);

    let childComponentRef = this.VCR.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    childComponent.products = this.products;
    childComponent.unique_key = ++this.child_unique_key;

    childComponent.parentRef = this;
    

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }

  remove(key: number) {
    if (this.VCR.length < 1) return;

    let componentRef = this.componentsReferences.filter(
      x => x.instance.unique_key == key
    )[0];

    let vcrIndex: number = this.VCR.indexOf(componentRef.hostView);

    // removing component from container
    this.VCR.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.unique_key !== key
    );
  }

  setProduct(key: number, product: any){
    this.productArray.push(product);
  }

  save(value: any){
    if(value.length < 4){
      this.invalidName = true;
      return;
    }
    let objStore = {
      name: value,
      products: this.productArray
    }
    this.addStoreEvent.emit(objStore);
    this.storeName = '';
  }

}
