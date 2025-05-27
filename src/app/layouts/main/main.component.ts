import { DesplegableService } from './../../shared/desplegable/desplegable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit{

  constructor(private desplegableService: DesplegableService) {}
  ngOnInit(): void {
    console.log('Main layout iniciado');
    this.desplegableService.setSidebarState(true);
  }

  toggleSidebar() {
    console.log("Paso por aqui")
    this.desplegableService.toggleSidebar();
    console.log(this.desplegableService.toggleSidebar());
  }
}
