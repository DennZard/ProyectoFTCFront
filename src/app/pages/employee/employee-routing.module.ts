import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { DeliveryChangeComponent } from './delivery-change/delivery-change.component';

const routes: Routes = [
  {path: 'login', component: LoginEmployeeComponent, data: { title: 'Login'}},
  {path: 'cambioEntregas', component:DeliveryChangeComponent, data: { title: 'Delivery'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
