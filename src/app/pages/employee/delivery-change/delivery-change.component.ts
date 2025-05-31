import { Router } from '@angular/router';
import { Employee } from './../../../core/models/Employee';
import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../../core/models/Delivery';
import { DeliveryService } from '../../../services/delivery.service';
import { Status } from '../../../core/models/Status';
import { StatusService } from '../../../services/status.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delivery-change',
  standalone: false,
  templateUrl: './delivery-change.component.html',
  styleUrl: './delivery-change.component.css',
})
export class DeliveryChangeComponent implements OnInit {
  employee: Employee;
  deliveries: Delivery[];
  statuses: Status[];

  cambiarEstado(delivery: Delivery) {
    this.deliveryService.changeStatusDelivery(delivery.id, delivery.status.id).subscribe(
      (resp: Boolean) => {
        if (resp) {
          Swal.fire(
            'Estado de la entrega cambiado con éxito',
            'Se cambio el estado de la entrega',
            'success'
          );
        } else {
          Swal.fire(
            'No se cambio el estado de la entrega',
            'No se pudo cambiar el estado',
            'error'
          );
        }

      }
    )

  }

  constructor(
    private router: Router,
    private deliveryService: DeliveryService,
    private statusService: StatusService
  ) {}

  ngOnInit(): void {
    this.statusService.getStatuses().subscribe((statuses: Status[]) => {
      this.statuses = statuses
    })
    this.getDeliveriesByEmployee();
  }

  getDeliveriesByEmployee() {
    var idHardcodeado = 1;
    this.deliveryService
      .getDeliveriesByEmployeeId(idHardcodeado)
      .subscribe((deliveries: Delivery[]) => {
        this.deliveries = deliveries;
      });

  }
}
