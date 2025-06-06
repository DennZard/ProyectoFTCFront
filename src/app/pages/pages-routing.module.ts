import { RegisterComponent } from './../auth/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from '../guard/admin-auth.guard';
import { Roles } from '../core/models/Roles.enum';
import { NoPermsComponent } from './no-perms/no-perms.component';
import { MainComponent } from '../layouts/main/main.component';
import { AuthLayoutComponent } from '../layouts/auth/auth-layout.component';
import { employeeGuard } from '../guard/employee.guard';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { LoginComponent } from '../auth/login/login.component';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'producto',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'compania',
        canActivate: [AuthGuard],
        data: { role: Roles.Customer },
        loadChildren: () =>
          import('./company/company.module').then((m) => m.CompanyModule),
      },
      {
        path: 'entrega',
        canActivate: [AuthGuard],
        data: { role: Roles.Customer },
        loadChildren: () =>
          import('./delivery/delivery.module').then((m) => m.DeliveryModule),
      },
      {
        path: 'empleado',
        canActivate: [],
        data: {},
        loadChildren: () =>
          import('./employee/employee.module').then((m) => m.EmployeeModule),
      },
      {
        path: 'admin',
        canActivate: [AuthGuard],
        data: { role: Roles.Admin },
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'inicio',
        loadChildren: () =>
          import('./main/inicio.module').then((m) => m.InicioModule),
      },
    ],
  },
  {
    path: 'main',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'no-authorized',
        component: NoPermsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
