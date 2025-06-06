import { DesplegableService } from './../../../shared/desplegable/desplegable.service';
import { Product } from './../../../core/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs';
import { BuyProduct } from '../../../core/interfaces/BuyProduct';
import { User } from '../../../core/models/User';
import { UsuarioSessionService } from '../../../services/usuario-session.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  id!: number;
  product: Product;
  sidebarOpen = false;
  private subscription: Subscription;
  displayDialog: boolean = false;
  dialogMessage: string = '';
  isPurchaseSuccess: boolean = true;
  usuario = this.getUser();

  getUser() {
    return User.getUser();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  ngOnInit(): void {
    this.subscription = this.desplegableService.isSidebarOpen$.subscribe(
      (open) => {
        this.sidebarOpen = open;
      }
    );
    console.log(User.getUser());
    this.sidebarOpen = false;
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.cargarProducto();
    });
    console.log(this.product);
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

  buyProduct() {
    var destination = 'Mi casa2';
    var user = User.getUser();
    const dto: BuyProduct = {
      id: this.id,
      money: user.money,
      destination: destination,
      userId: user.id,
    };

    this.productService.buyProduct(dto).subscribe((compra: boolean) => {
      this.dialogMessage = compra
        ? 'Compra realizada con éxito'
        : 'La compra no se pudo completar, intentelo de nuevo más tarde ';
      this.isPurchaseSuccess = compra;
      this.displayDialog = true;
      var object = JSON.parse(sessionStorage.getItem('user'));
      if (object?.data?.user) {
        object.data.user.money -= this.product.price;
        sessionStorage.setItem('user', JSON.stringify(object));
        console.log(sessionStorage.getItem("user"))
        this.usuarioSessionService.setUsuario(object.data.user);
      }
      console.log(object);
      setTimeout(() => {
        this.cargarProducto();
        this.usuario = this.getUser();
      }, 1000);
    });
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private desplegableService: DesplegableService,
    private usuarioSessionService: UsuarioSessionService
  ) {}
}
