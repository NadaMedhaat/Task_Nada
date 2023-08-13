import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProHomeComponent } from './pro-home/pro-home.component';
import { ProductDeteComponent } from './prouducts-dete/prouducts-dete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProHomeComponent,
    ProductsComponent,
    ProductDeteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
