import { Component } from '@angular/core';

@Component({
  selector: 'app-desplegable',
  standalone: false,
  templateUrl: './desplegable.component.html',
  styleUrl: './desplegable.component.css',
})
export class DesplegableComponent {
  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
