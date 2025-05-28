import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DesplegableComponent } from '../shared/desplegable/desplegable.component';



@NgModule({
  declarations: [
    DesplegableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    DesplegableComponent
  ],
})
export class SharedModule {}
