import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
  ]
})
export class PagesModule { }
