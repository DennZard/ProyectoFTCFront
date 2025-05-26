import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { AllCustomerComponent } from './all-customer/all-customer.component';
import { DetailsComponent } from './details/details.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AllCustomerComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class DeliveryModule { }
