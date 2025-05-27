import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesplegableComponent } from './desplegable/desplegable.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DesplegableComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [DesplegableComponent],
})
export class SharedModule {}
