import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    DeleteCompanyComponent,
    DeleteEmployeeComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule
  ],
})
export class AdminModule {}
