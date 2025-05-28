import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CompanyRoutingModule } from './company/company-routing.module';
import { DeliveryRoutingModule } from './delivery/delivery-routing.module';
import { EmployeeRoutingModule } from './employee/employee-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { NoPermsComponent } from './no-perms/no-perms.component';
import { SharedModule } from '../shared/shared.module';
import { MainModule } from '../layouts/main/main.module';
import { AuthLayoutModule } from '../layouts/auth/auth-layout.module';
import { InicioModule } from './main/inicio.module';


@NgModule({
  declarations: [
    MainPageComponent,
    NoPermsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    CompanyRoutingModule,
    DeliveryRoutingModule,
    EmployeeRoutingModule,
    AdminRoutingModule,
    CardModule,
    SharedModule,
    MainModule,
    AuthLayoutModule,
    InicioModule
  ],
})
export class PagesModule {

 }
