import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../core/models/Product';
import { DesplegableService } from '../../../shared/desplegable/desplegable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all',
  standalone: false,
  templateUrl: './all.component.html',
  styleUrl: './all.component.css',
})
export class AllComponent implements OnInit {
  products: Product[] = [];
  sidebarOpen = false;
  private subscription: Subscription;


  constructor(
    private productService: ProductService,
     private router: Router,
     private desplegableService: DesplegableService
    ) {}



  ngOnInit(): void {
    this.subscription = this.desplegableService.isSidebarOpen$.subscribe(
      (open) => {
        this.sidebarOpen = open;
      }
    );
    this.sidebarOpen = false
    this.productService.getAll().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  verDetalles(id: number) {
    this.router.navigate(['/main/producto', id]);
  }

  getImage(product: Product) {
    if (!product.image) {
      return`assets/placeholder.png`;
    } else {
      if (!product.image.includes('.jpg') && !product.image.includes('.png')) {
        return `assets/placeholder.png`;
      }
      if (product.image.includes('http')) {
        return product.image;
      }
    }
    return `assets/placeholder.png`;
  }
}
