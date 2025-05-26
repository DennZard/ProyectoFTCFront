import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DeliveryChangeComponent } from './delivery-change/delivery-change.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [DeliveryChangeComponent, LoginEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
  ],
})
export class EmployeeModule {}
