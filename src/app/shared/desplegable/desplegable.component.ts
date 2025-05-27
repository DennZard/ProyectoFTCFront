import { Component } from '@angular/core';
import { DesplegableService } from './desplegable.service';

@Component({
  selector: 'app-desplegable',
  standalone: false,
  templateUrl: './desplegable.component.html',
  styleUrl: './desplegable.component.css',
})
export class DesplegableComponent {
  isOpen = false;

  constructor(private desplegableService: DesplegableService) {}

  toggleSidebar() {
    console.log('Cambio');
    this.isOpen = !this.isOpen;
    this.desplegableService.setSidebarState(this.isOpen)
  }
}
