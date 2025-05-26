import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { AuthGuard } from '../guard/admin-auth.guard';
import { AuthService } from '../services/auth.service';
import { Roles } from '../core/models/Roles.enum';
import { NoPermsComponent } from './no-perms/no-perms.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
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
        data: { },
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
        path:"no-authorized",
        component: NoPermsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
