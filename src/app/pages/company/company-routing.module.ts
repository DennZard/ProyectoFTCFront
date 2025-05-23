import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'nueva', component: CreateCompanyComponent, data: { title: 'Crear' } },
  {path: 'nuevo-producto', component: CreateProductComponent, data: { title: 'Nuevo' } },
  {path: 'products', component: ProductsComponent, data: { title: 'Productos' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
