import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../services/company.service';
import { CreateProduct } from '../../../core/interfaces/CreateProduct';
import { User } from '../../../core/models/User';
import Swal from 'sweetalert2';
import { Category } from '../../../core/models/Category';

@Component({
  selector: 'app-create-product',
  standalone: false,
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  categorias: Category[] = [];

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      image: [''],
      price: [[0], [Validators.required]],
      stock: [[0], [Validators.required]],
      category: [[0], [Validators.required]],
    });
  }

  saveProduct() {
    const companyId = User.getUser().company.id;
    const dto: CreateProduct = {
      name: this.productForm.value.name,
      categoryId: this.productForm.value.category.id,
      price: this.productForm.value.price,
      companyId: companyId,
      image: this.productForm.value.image,
      stock: this.productForm.value.stock,
    };
    console.log(dto)
    this.companyService.createProduct(dto).subscribe((creado: Boolean) => {
      if (creado) {
        Swal.fire(
          'El producto se ha creado con éxito',
          'Producto creado',
          'success'
        );
      } else {
        Swal.fire(
          'El producto no se pudo crear',
          'Fallo al crear el producto',
          'error'
        );
      }
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categorias = categories;
    });
  }
  isValidField(key: string) {
    return this.productForm.get(key)?.invalid;
  }
  ngOnInit(): void {
    this.getCategories();
    console.log(this.categorias)

  }
}
