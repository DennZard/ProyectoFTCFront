import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../core/models/Product';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  usuario: any;
  showSidebar = true;

  constructor(private router: Router, private productService: ProductService) {}

  productos: Product[] = []

  verDetalle(product: any) {
    this.router.navigate(['/main/producto/', product.id]);
  }

  ngOnInit(): void {
    this.usuario = sessionStorage.getItem('user');
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const hiddenRoutes = [
          '/main/login',
          '/main/register',
          'main/no-authorized',
        ];
        this.showSidebar = !hiddenRoutes.includes(event.urlAfterRedirects);
      });
      this.productService.getPopular().subscribe((prods: Product[]) => {
        this.productos = prods
      })

  }
}
