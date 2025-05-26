import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../../core/models/Delivery';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  ngOnInit(): void {
  }
  delivery: Delivery;


}
