import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../../core/models/Delivery';
import { Router } from '@angular/router';
import { DeliveryService } from '../../../services/delivery.service';
import { User } from '../../../core/models/User';
import Swal from 'sweetalert2';
import { StatusService } from '../../../services/status.service';
import { Subscription } from 'rxjs';
import { DesplegableService } from '../../../shared/desplegable/desplegable.service';

@Component({
  selector: 'app-all-customer',
  standalone: false,
  templateUrl: './all-customer.component.html',
  styleUrl: './all-customer.component.css',
})
export class AllCustomerComponent implements OnInit {
  deliveries: Delivery[] = [];
  sidebarOpen: boolean;
  private subscription: Subscription;

  verDetalle(id: number) {}

  constructor(
    private router: Router,
    private deliveryService: DeliveryService,
    private statusService: StatusService,
    private desplegableService: DesplegableService
  ) {}

  getDeliveries(id: number) {
    this.deliveryService
      .getDeliveriesByCustomerId(id)
      .subscribe((del: Delivery[]) => {
        this.deliveries = del;
      });
  }

  cancelDelivery(id: number) {
    this.deliveryService
      .changeStatusDelivery(id, 4)
      .subscribe((resp: Boolean) => {
        if (resp) {
          Swal.fire(
            'Entrega canceladda',
            'Entrega cancelada con exito',
            'success'
          );
          this.getDeliveries(User.getUser().id);
        } else {
          Swal.fire(
            'No se pudo cancelar la entrega',
            'Entrega no cancelada',
            'error'
          );
        }
      });
  }

  ngOnInit(): void {
    this.subscription = this.desplegableService.isSidebarOpen$.subscribe(
      (open) => {
        this.sidebarOpen = open;
      }
    );
    this.sidebarOpen = false;
    this.getDeliveries(User.getUser().id);
  }
}
