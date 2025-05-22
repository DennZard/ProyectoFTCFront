import { AllComponent } from './all/all.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DetailsComponent } from './details/details.component';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    AllComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CardModule,

  ],
})
export class ProductModule {}
