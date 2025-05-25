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


@NgModule({
  declarations: [
    MainPageComponent
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
  ]
})
export class PagesModule { }
