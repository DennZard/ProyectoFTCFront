import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateProductComponent } from './create-company/create-product.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    CreateCompanyComponent,
    CreateProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
