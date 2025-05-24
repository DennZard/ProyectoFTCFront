import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from '../../guard/admin-auth.guard';
import { Roles } from '../../core/models/Roles.enum';

const routes: Routes = [
  {
    path: 'nueva',
    component: CreateCompanyComponent,
    data: { title: 'Crear' },
  },
  {
    path: 'nuevo-producto',
    component: CreateProductComponent,
    data: { title: 'Nuevo', role: Roles.Seller },
    canActivate: [AuthGuard],
  },
  {
    path: 'productos',
    component: ProductsComponent,
    data: { title: 'Productos', role: Roles.Seller },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
