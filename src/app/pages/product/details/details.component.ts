import { DesplegableService } from './../../../shared/desplegable/desplegable.service';
import { Product } from './../../../core/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  id!: number;
  product: Product;
  sidebarOpen;
  private subscription: Subscription;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.desplegableService.isSidebarOpen$.subscribe(
      (open) => {
        console.log('Sidebar state received:', open);
        this.sidebarOpen = open;
      }
    );
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.cargarProducto();
    });
  }

  goToAll() {
    this.router.navigateByUrl('main/product/all');
  }

  cargarProducto() {
    this.productService.getDetails(this.id).subscribe((product: Product) => {
      this.product = product;
      console.log(this.product);
    });
  }

  buyProduct(money: number) {
    money = 300;
    this.productService
      .buyProduct(this.id, money)
      .subscribe((compra: boolean) => {
        console.log(compra);
      });
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private desplegableService: DesplegableService
  ) {}
}
