import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { ProductRoutingModule } from './product/product-routing.module';

const routes: Routes = [
  {
    path: 'main',component: MainPageComponent,
    children: [
      {
        path: "producto",
        loadChildren: () =>
          import("./product/product.module").then(m => m.ProductModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ProductRoutingModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
