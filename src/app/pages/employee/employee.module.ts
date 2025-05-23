import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DeliveryChangeComponent } from './delivery-change/delivery-change.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';


@NgModule({
  declarations: [
    DeliveryChangeComponent,
    LoginEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
