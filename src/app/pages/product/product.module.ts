import { AllComponent } from './all/all.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DetailsComponent } from './details/details.component';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllComponent, DetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CardModule,
    DialogModule,
    FormsModule,
  ],
})
export class ProductModule {}
