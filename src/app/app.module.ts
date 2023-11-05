import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StoreItemComponent } from './main-page/store-item/store-item.component';
import { AddStoreComponent } from './main-page/add-store/add-store.component';
import { AddProductComponent } from './main-page/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StoreItemComponent,
    AddStoreComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
