import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {path: 'compania', canActivate:[], component: DeleteCompanyComponent, data: { title: 'Eliminar Compañia'}},
  {path: 'empleados', component: DeleteEmployeeComponent, data: { title: 'Detalles'}},
  {path: 'nuevo', component: CreateEmployeeComponent, data: { title: 'Detalles'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
