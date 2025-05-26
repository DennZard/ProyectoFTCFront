import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../../core/models/Delivery';
import { Router } from '@angular/router';
import { DeliveryService } from '../../../services/delivery.service';
import { User } from '../../../core/models/User';

@Component({
  selector: 'app-all-customer',
  standalone: false,
  templateUrl: './all-customer.component.html',
  styleUrl: './all-customer.component.css'
})
export class AllCustomerComponent implements OnInit{
  deliveries: Delivery[] = []

  constructor(
    private router: Router,
    private deliveryService: DeliveryService

  ) {

  }

  getDeliveries(id:number) {
    this.deliveryService.getDeliveriesByCustomerId(id).subscribe((del: Delivery[]) => {
      this.deliveries = del
    })
  }

  cancelDelivery(id:number) {

  }

  ngOnInit(): void {
    this.getDeliveries(User.getUser().id);
  }

}
