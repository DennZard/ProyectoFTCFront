import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../core/models/Product';

@Component({
  selector: 'app-all',
  standalone: false,
  templateUrl: './all.component.html',
  styleUrl: './all.component.css',
})
export class AllComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((products: Product[]) => {
      this.products = products;
      console.log(...products);
    });
  }

  verDetalles(id: number) {
    this.router.navigate(['/main/producto', id]);
  }

  getImage(product: Product) {
    if (!product.image.includes('.jpg') && !product.image.includes('.png')) {
      return `assets/placeholder.png`;
    }
    if (product.image.includes('http')) {
      return product.image;
    }
    return `assets/${product.image}`;
  }
}
