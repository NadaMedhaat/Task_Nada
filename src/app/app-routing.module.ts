import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProHomeComponent } from './pro-home/pro-home.component';
import { ProductDeteComponent } from './prouducts-dete/prouducts-dete.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pro-home', component: ProHomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDeteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
