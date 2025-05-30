import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/Product';
import { CompanyService } from '../../../services/company.service';
import { User } from '../../../core/models/User';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private companyService: CompanyService, router: Router) {}

  ngOnInit(): void {
    this.companyService
      .getProducts(User.getUser().company.id)
      .subscribe((products: Product[]) => {
        if (products) {
          this.products = products;
        } else {
          console.log('No hay productos');
        }
      });
    if (this.products.length === 0) {
      console.log('Esta vacio');
    }
  }

  getImage(product: Product) {
    if (!product.image) {
      return `assets/placeholder.png`;
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
