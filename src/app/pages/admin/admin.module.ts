import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


@NgModule({
  declarations: [
    DeleteCompanyComponent,
    DeleteEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
