import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  usuario: any
  ngOnInit(): void {
    this.usuario = sessionStorage.getItem("user")
  }

}
